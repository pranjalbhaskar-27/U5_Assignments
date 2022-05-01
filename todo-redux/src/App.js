import "./App.css";
import Todo from "./Components/Todo";
import { Routes, Route } from "react-router-dom";
import TodoDetails from "./Components/TodoDetails";
import PrivateRouter from "./Components/PrivateRouter";
import Login from "./Components/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Todo />} />
				<Route
					path="/todo/:id"
					element={
						<PrivateRouter>
							<TodoDetails />
						</PrivateRouter>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
