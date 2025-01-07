import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '7a8dad883bcbedd22cdf6cea47bd850f'; 

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('Shahar topilmadi');
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <h1>Ob-havo Ilovasi</h1>
      <SearchBar setCity={setCity} fetchWeather={fetchWeather} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;
