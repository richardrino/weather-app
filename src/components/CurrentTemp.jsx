const CurrentTemp = ({ currentTemp }) => {
	return <div>{currentTemp ? currentTemp : 'Enter a location'}</div>;
};

export default CurrentTemp;
