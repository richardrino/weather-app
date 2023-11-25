import Search from './Search';
import SearchResultsList from './SearchResultsList';
import { useState } from 'react';

const Header = ({ getCurrentWeather }) => {
	const [searchResults, setSearchResults] = useState([]);

	return (
		<header>
			<span className='logo-text'>ForecastIQ</span>
			<div>
				<Search
					setSearchResults={setSearchResults}
					getCurrentWeather={getCurrentWeather}
				/>
				{searchResults.length > 0 && (
					<SearchResultsList searchResults={searchResults} />
				)}
			</div>
			<nav>
				<ul className='nav-list'>
					<li>Today&apos;s Forecast</li>
					<li>Hourly Forecast</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
