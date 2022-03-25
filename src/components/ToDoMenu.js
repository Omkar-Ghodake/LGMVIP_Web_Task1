import React, { useContext, useState } from 'react';
import ToDoContext from '../context/ToDoContext';

const ToDoMenu = () => {

	const contextToDo = useContext(ToDoContext);
	const { addToDo } = contextToDo;

	const [input, setInput] = useState('');

	const onChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	}

	const handleAddClick = (e) => {
		e.preventDefault()
		addToDo(input);
	}

	return (
		<>
			<div className="card">
				<div className="card-body">
					<div className="input-group">
						<form className='w-100 d-flex'>
							<div className="input-group">
								<input type="text" className="form-control" id="validationDefault01" name='title' onChange={onChange} required />
								<button className="btn btn-outline-dark" type="submit" onClick={handleAddClick}>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default ToDoMenu