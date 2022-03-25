import React from 'react'
import ToDoList from './ToDoList'
import ToDoMenu from './ToDoMenu'

const Home = () => {
	return (
		<>
			<div className="container my-5">
				<div className="left w-100 mb-5">
					<h3 className='text-center'>Add a ToDo</h3>
					<ToDoMenu />
				</div>

				<div className="right w-100 mb-5">
					<h3 className='text-center'>ToDos</h3>
					<ToDoList />
				</div>
			</div>
		</>
	)
}

export default Home