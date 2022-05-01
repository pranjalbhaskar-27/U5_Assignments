import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
export default function Login() {
	const initial = { email: "", password: "" };
	const [loginData, setLoginData] = useState(initial);

	const auth = useSelector((store) => store.auth.auth);
	const navigate = useNavigate();
	console.log(auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth) {
			navigate(-1, { replace: true });
		}
	}, [auth]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const { data } = await axios.post(
				"https://reqres.in/api/login",
				loginData
			);
			setLoginData(initial);
			dispatch(addToken(data));
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				value={loginData.email}
				onChange={handleChange}
				name="email"
				placeholder="Enter Email here"
			/>
			<input
				type="password"
				value={loginData.password}
				onChange={handleChange}
				name="password"
				placeholder="Enter Password here"
			/>
			<input type="submit" value="Login" />
		</form>
	);
}
