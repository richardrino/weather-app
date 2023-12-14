import { useState } from 'react';
import { API_CURRENT_WEATHER } from './constants';
import Header from './components/Header';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import HourlyWeatherCard from './components/HourlyWeatherCard';

function App() {
	const [weather, setWeather] = useState();

	const getWeather = async (coordinates) => {
		const jsonData = await fetch(
			`${API_CURRENT_WEATHER}?lat=${coordinates[0]}&lon=${
				coordinates[1]
			}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
		);
		const data = await jsonData.json();
		setWeather(data);
	};

	return (
		<>
			<Header getWeather={getWeather} />
			<CurrentWeatherCard weather={weather} />
			<HourlyWeatherCard weather={weather} />
		</>
	);
}

export default App;
