const HourlyWeather = ({ weather }) => {
	let hourlyWeather;

	const getHourlyTime = (seconds) => {
		const dateObj = new Date(seconds * 1000);
		const hours = dateObj.getHours();

		const timeString = `${hours.toString()}:00`;
		return timeString;
	};

	if (weather && weather.hourly) {
		hourlyWeather = weather.hourly.map((hour, index) => (
			<>
				<div>{getHourlyTime(hour.dt)}</div>
				<div key={index}>{hour.temp}&deg;</div>
			</>
		));
	}

	return <div>{hourlyWeather ? hourlyWeather : '--'}</div>;
};

export default HourlyWeather;
