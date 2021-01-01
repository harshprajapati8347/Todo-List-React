import React from 'react';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<div className="center_div">
				<br />
				<h1>Todo List</h1>
				<br />
				<input type="text" placeholder="Add Items...." />
				<button>+</button>
				<ul>
					<li>Buy apple</li>
					<li>Buy Apple</li>
					<li>Buy Apple</li>
				</ul>
			</div>
		</div>
	);
};

export default App;
