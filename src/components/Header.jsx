import Search from './Search';

const Header = ({ getCurrentWeather }) => {
	return (
		<header>
			<span className='logo-text'>ForecastIQ</span>
			<Search
				getCurrentWeather={getCurrentWeather}
			/>
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
