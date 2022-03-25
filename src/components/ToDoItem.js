import React from 'react';

const ToDoItem = (props) => {

	const { title } = props;

	return (
		<>
			{title && <div className="alert border alert-dismissible fade show" role="alert">
				{title}
				<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>}
		</>
	)
}

export default ToDoItem