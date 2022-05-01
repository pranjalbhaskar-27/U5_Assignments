import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getTodoDetails } from "../Redux/Todos/action";
export default function TodoDetails() {
	const { id } = useParams();
	const todosDetails = useSelector((store) => store.todos.todosDetails);
	const dispatch = useDispatch();
	console.log(todosDetails);

	useEffect(() => {
		getTodosDetails();
	}, []);

	const getTodosDetails = async () => {
		const { data } = await axios.get(`http://localhost:8080/todos/${id}`);
		dispatch(getTodoDetails(data));
	};

	return (
		<div>
			{todosDetails.id}. {todosDetails.title}
		</div>
	);
}
