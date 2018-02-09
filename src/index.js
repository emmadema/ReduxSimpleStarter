//jus var is class to make instance wrap with Jsx tags

//Make: Create a new component. This component should produce some HTMl

//Show on page: Tkae this components gnerated HTMl and put it in the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC9bLal_hxKk-zOwrdtGCb_zPh9ld5v0y0';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));