import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTodo } from "../Redux/Todos/action";
// import { deleteTodo, toggleTodo } from "../Redux/action";
export default function Todo() {
	const [text, setText] = useState("");
	const todos = useSelector((store) => store.todos.todos);
	console.log(todos);
	const dispatch = useDispatch();

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data } = await axios.get("http://localhost:8080/todos");
		dispatch(getTodo(data));
	};

	const addTodo = async () => {
		const payload = { title: text, status: false };
		await axios.post("http://localhost:8080/todos", payload);
		getData();
	};

	const deleteTodo = async (id) => {
		await axios.delete(`http://localhost:8080/todos/${id}`);
		getData();
	};

	const toggleTodo = async (id) => {
		const payload = {
			status: !todos.filter((e) => e.id === id)[0].status,
		};

		await axios.patch(`http://localhost:8080/todos/${id}`, payload);
		getData();
	};

	return (
		<div>
			<input
				onChange={(e) => {
					setText(e.target.value);
				}}
				type="text"
				placeholder="Enter Todo"
			/>
			<button
				onClick={() => {
					addTodo();
				}}>
				Add Todo
			</button>

			{todos.map((e) => (
				<div key={e.id}>
					<Link to={`/todo/${e.id}`}>{e.title}</Link>

					<button
						onClick={() => {
							deleteTodo(e.id);
						}}>
						Delete
					</button>
					<button
						onClick={() => {
							toggleTodo(e.id);
						}}>
						{e.status ? "complete" : "incomplete"}
					</button>
				</div>
			))}
		</div>
	);
}
