export const GET_TODO = "GET_TODO";
export const GET_TODO_DETAILS = "GET_TODO_DETAILS";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const getTodo = (data) => {
	return {
		type: GET_TODO,
		payload: data,
	};
};

export const getTodoDetails = (data) => {
	return {
		type: GET_TODO_DETAILS,
		payload: data,
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

export const toggleTodo = (id) => {
	return { type: TOGGLE_TODO, payload: id };
};
