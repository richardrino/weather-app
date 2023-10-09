import CurrentTime from './CurrentTime';
import CurrentWeather from './CurrentWeather';

const CurrentWeatherCard = ({ currentWeather }) => {
	return (
		<div>
			<h2 className='card__heading'>Current Weather</h2>
			<CurrentTime />
			<CurrentWeather currentWeather={currentWeather} />
		</div>
	);
};

export default CurrentWeatherCard;
