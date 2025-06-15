import React, { useState, useEffect, useCallback } from 'react';

// Main App component
const App = () => {
    // State variables for city input, weather data, loading status, and error messages
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

    // OpenWeatherMap API Key - REPLACE WITH YOUR ACTUAL API KEY
    const API_KEY = '4e4bfff842d5ceb19af68d79a4170883'; // <<< IMPORTANT: Replace with your OpenWeatherMap API Key

    // Function to fetch weather data from OpenWeatherMap API
    const fetchWeather = useCallback(async (selectedCity) => {
        if (!selectedCity) return; // Do not fetch if city is empty

        setLoading(true);
        setError(null);
        setWeatherData(null);
        setForecastData(null);

        try {
            // Fetch current weather
            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=${unit}&appid=${API_KEY}`;
            const currentWeatherResponse = await fetch(currentWeatherUrl);
            const currentWeatherData = await currentWeatherResponse.json();

            if (currentWeatherData.cod !== 200) {
                throw new Error(currentWeatherData.message || 'City not found or API error.');
            }
            setWeatherData(currentWeatherData);

            // Fetch 5-day / 3-hour forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=${unit}&appid=${API_KEY}`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastJson = await forecastResponse.json();

            if (forecastJson.cod !== '200') {
                throw new Error(forecastJson.message || 'Forecast data not available.');
            }

            // Filter forecast data to get one entry per day (around noon for better representation)
            const dailyForecasts = forecastJson.list.filter((item) =>
                item.dt_txt.includes('12:00:00')
            );
            setForecastData(dailyForecasts);

        } catch (err) {
            console.error("Failed to fetch weather data:", err);
            setError(`Error: ${err.message}. Please check the city name or your API key.`);
        } finally {
            setLoading(false);
        }
    }, [API_KEY, unit]); // Dependencies for useCallback

    // Effect to fetch weather data when city or unit changes (e.g., initial load or unit toggle)
    useEffect(() => {
        // You might want to pre-load a default city, e.g., on initial component mount
        // if (city) {
        //     fetchWeather(city);
        // }
    }, [city, unit, fetchWeather]); // Re-run when city, unit, or fetchWeather changes

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(city);
    };

    // Toggle temperature unit
    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
        // Re-fetch weather with the new unit if a city is already set
        if (weatherData) {
            fetchWeather(city);
        }
    };

    // Helper function to convert Unix timestamp to readable date
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    // Helper function to get weather icon URL
    const getWeatherIcon = (iconCode) => {
        return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4 font-inter">
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-2xl transform transition-all duration-300 hover:scale-[1.01]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 drop-shadow-sm">
                    WanniWeather
                </h1>

                {/* City Input Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name..."
                        className="flex-grow p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200 text-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md transition-all duration-200 text-lg font-semibold"
                    >
                        Get Weather
                    </button>
                    <button
                        type="button"
                        onClick={toggleUnit}
                        className="px-4 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-md transition-all duration-200 text-lg font-semibold"
                    >
                        {unit === 'metric' ? '°C' : '°F'}
                    </button>
                </form>

                {/* Loading and Error Messages */}
                {loading && (
                    <div className="text-center text-blue-700 text-xl font-medium mt-6">
                        Loading weather data...
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl relative mb-6 text-center text-lg shadow-sm">
                        {error}
                    </div>
                )}

                {/* Current Weather Display */}
                {weatherData && (
                    <div className="bg-blue-100 rounded-2xl p-6 mb-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center">
                            Current Weather in {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-gray-700">
                            <div className="flex flex-col items-center">
                                <img
                                    src={getWeatherIcon(weatherData.weather[0].icon)}
                                    alt={weatherData.weather[0].description}
                                    className="w-24 h-24 object-contain drop-shadow-md"
                                />
                                <p className="text-xl capitalize font-medium">{weatherData.weather[0].description}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-6xl font-bold text-blue-900 leading-none">
                                    {Math.round(weatherData.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
                                </p>
                                <p className="text-lg mt-2">
                                    Feels like: {Math.round(weatherData.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}
                                </p>
                            </div>
                            <div className="text-lg space-y-2">
                                <p>Humidity: {weatherData.main.humidity}%</p>
                                <p>Wind: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
                                <p>Pressure: {weatherData.main.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* 5-Day Forecast Display */}
                {forecastData && forecastData.length > 0 && (
                    <div className="bg-green-100 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                        <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">
                            5-Day Forecast
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {forecastData.slice(0, 5).map((day, index) => ( // Displaying only 5 days
                                <div key={index} className="bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-md border border-gray-200 transform transition-all duration-200 hover:scale-[1.03]">
                                    <p className="text-lg font-semibold text-gray-800 mb-2">
                                        {formatDate(day.dt)}
                                    </p>
                                    <img
                                        src={getWeatherIcon(day.weather[0].icon)}
                                        alt={day.weather[0].description}
                                        className="w-16 h-16 object-contain"
                                    />
                                    <p className="text-md capitalize text-gray-600 mt-1">
                                        {day.weather[0].description}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900 mt-2">
                                        {Math.round(day.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
            <style>
                {/* Ensure the 'Inter' font is applied via a global CSS file or in index.html */}
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>
        </div>
    );
};

export default App;
