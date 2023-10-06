const Header = () => {
	return (
		<header>
			<span className='logo-text'>ForecastIQ</span>
			<form action=''>
				<input type='text' />
				<button type='submit'>Search</button>
			</form>
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
