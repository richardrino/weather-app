import { useState } from 'react';
import { API_CURRENT_WEATHER } from './constants';
import Header from './components/Header';
import CurrentWeatherCard from './components/CurrentWeatherCard';

function App() {
	const [currentWeather, setCurrentWeather] = useState();

	const getCurrentWeather = async (coordinates) => {
		const jsonData = await fetch(
			`${API_CURRENT_WEATHER}?lat=${coordinates[0]}&lon=${
				coordinates[1]
			}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
		);
		const data = await jsonData.json();

		setCurrentWeather(data.current);
	};

	return (
		<>
			<Header getCurrentWeather={getCurrentWeather} />
			<CurrentWeatherCard currentWeather={currentWeather} />
		</>
	);
}
export default App;
