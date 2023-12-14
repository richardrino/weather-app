import CurrentTime from './CurrentTime';
import CurrentWeather from './CurrentWeather';

const CurrentWeatherCard = ({ weather }) => {
	return (
		<div>
			<h2 className='card__heading'>Current Weather</h2>
			<CurrentTime />
			<CurrentWeather weather={weather} />
		</div>
	);
};

export default CurrentWeatherCard;
