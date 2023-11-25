import { useState } from 'react';
import { API_COORDINATES } from '../constants';

const Search = ({ getCurrentWeather, setSearchResults }) => {
	const [searchInput, setSearchInput] = useState('');

	const handleChange = async (e) => {
		setSearchInput(e.target.value);
		// Geocoding API call
		console.log('Getting search results...');
		const jsonData = await fetch(
			`${API_COORDINATES}?q=${searchInput}&limit=5&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);
		const data = await jsonData.json();
		console.log(data);
		setSearchResults(data);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Geocoding API call
		const jsonData = await fetch(
			`${API_COORDINATES}?q=${searchInput}&limit=5&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);
		const data = await jsonData.json();
		console.log(data);
		getCurrentWeather([data[0].lat, data[0].lon]);
	};

	return (
		<form action='' onSubmit={handleSubmit}>
			<input name='searchInput' type='text' onChange={handleChange} />
			<button type='submit'>Search</button>
		</form>
	);
};

export default Search;
