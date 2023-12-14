const CurrentWeather = ({ weather }) => {
	return <div>{weather ? weather.current.temp + '\u00B0': 'Enter a location'}</div>;
};

export default CurrentWeather;
