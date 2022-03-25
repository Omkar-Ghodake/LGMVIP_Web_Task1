import React, { useContext } from 'react';
import ToDoContext from '../context/ToDoContext';
import ToDoItem from './ToDoItem';

const ToDoList = () => {

	const contextToDoContext = useContext(ToDoContext);
	const { toDo } = contextToDoContext;

	let key = 0;

	return (
		<>
			{
				toDo.map((element) => {
					key++
					return element && <ToDoItem key={key} title={element.title} />
				})
			}
		</>
	)
}

export default ToDoList