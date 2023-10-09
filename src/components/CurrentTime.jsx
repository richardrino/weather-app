import { useState } from 'react';

const CurrentTime = () => {
	const [currentTime, setCurrentTime] = useState();

	const getCurrentTime = () => {
		const date = new Date();
		const currentTime = date.toLocaleTimeString();

		setCurrentTime(currentTime);
	};

	setTimeout(getCurrentTime, 1000);

	return <div>{currentTime}</div>;
};

export default CurrentTime;
