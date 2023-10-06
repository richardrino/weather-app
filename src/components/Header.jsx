import Search from './Search';

const Header = ({ getCoordinates }) => {
	return (
		<header>
			<span className='logo-text'>ForecastIQ</span>
			<Search getCoordinates={getCoordinates} />
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
