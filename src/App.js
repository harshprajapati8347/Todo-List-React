import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
	const [inputList, setInputList] = useState('');
	const [items, setItems] = useState([]);

	const itemEvent = (e) => {
		setInputList(e.target.value);
	};

	const listItems = (e) => {
		setItems((oldItems) => {
			return [...oldItems, inputList];
		});
		setInputList('');
	};
	const deleteItems = (id) => {
		setItems((oldItems) => {
			return oldItems.filter((arrElement, index) => {
				return index !== id;
			});
		});
	};
	return (
		<div className="App">
			<div className="container">
				<br />
				<h1>Todo List</h1>
				<br />
				<input type="text" placeholder="Add Items...." onChange={itemEvent} value={inputList} />
				<button onClick={listItems}>+</button>
				<ul>
					{items.map((itemVal, index) => {
						return <TodoList key={index} text={itemVal} id={index} onSelect={deleteItems} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default App;
