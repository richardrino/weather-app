import HourlyWeather from './HourlyWeather';

const HourlyWeatherCard = ({ weather }) => {
	return (
		<div>
			<h2 className='card__heading'>Hourly Weather</h2>
			<HourlyWeather weather={weather} />
		</div>
	);
};

export default HourlyWeatherCard;
