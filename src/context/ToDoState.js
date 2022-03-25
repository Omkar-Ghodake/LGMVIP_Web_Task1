import React, { useState } from 'react';
import ToDoContext from './ToDoContext';

const ToDoState = (props) => {

	const [toDo, setToDo] = useState([]);

	const addToDo = (title) => {
		setToDo([...toDo, title]);
	}

	return (
		<>
			<ToDoContext.Provider value={{ toDo, addToDo }}>
				{props.children}
			</ToDoContext.Provider>
		</>
	)
}

export default ToDoState