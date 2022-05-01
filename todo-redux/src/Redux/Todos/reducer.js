// import { DELETE_TODO, TOGGLE_TODO } from "./action";
import { GET_TODO, GET_TODO_DETAILS } from "./action";
const initialState = { todos: [], todosDetails: {} };

export const todoReducer = (store = initialState, { type, payload }) => {
	switch (type) {
		case GET_TODO:
			return { ...store, todos: payload };
		case GET_TODO_DETAILS:
			return { ...store, todosDetails: payload };
		default:
			return store;
	}
};
