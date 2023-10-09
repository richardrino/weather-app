const CurrentWeather = ({ currentWeather }) => {
	return <div>{currentWeather ? currentWeather.temp : 'Enter a location'}</div>;
};

export default CurrentWeather;
