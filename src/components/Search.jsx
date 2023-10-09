import { useState } from 'react';
import { API_COORDINATES } from '../constants';

const Search = ({ getCurrentWeather }) => {
	const [searchInput, setSearchInput] = useState('');

	const handleInput = (e) => {
		setSearchInput(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const jsonData = await fetch(
			`${API_COORDINATES}?q=${searchInput}&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);
		const data = await jsonData.json();
		getCurrentWeather([data[0].lat, data[0].lon]);
	};

	return (
		<form action='' onSubmit={handleSubmit}>
			<input type='text' onChange={handleInput} />
			<button type='submit'>Search</button>
		</form>
	);
};

export default Search;
