import { useState } from 'react';
import Header from './components/Header';

function App() {
	const [coordinates, setCoordinates] = useState([]);

	const getCoordinates = (dataCoordinates) => {
		setCoordinates(dataCoordinates);
	};

	return (
		<>
			<Header getCoordinates={getCoordinates} />
		</>
	);
}
export default App;
