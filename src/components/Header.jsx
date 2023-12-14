import Search from './Search';
import SearchResultsList from './SearchResultsList';
import { useState } from 'react';

const Header = ({ getWeather }) => {
	return (
		<header>
			<span className='logo-text'>ForecastIQ</span>
			<Search getWeather={getWeather} />
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
