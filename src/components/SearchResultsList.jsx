const SearchResultsList = ({ searchResults }) => {
    console.log('Are the search results an array?');
    console.log(Array.isArray(searchResults));
	if (Array.isArray(searchResults)) {
		return (
			<div className='search-results-list'>
				{searchResults.map((searchResult, index) => {
					return <div key={index}>{searchResult.name}</div>;
				})}
			</div>
		);
	}
};

export default SearchResultsList;
