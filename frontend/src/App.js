import React, { useEffect, useState } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { getTodos, createTodo } from "./api.js";

import "./App.scss";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await getTodos();

				setTodos(response.data.data);
			} catch (e) {
				console.log("Error: ", e);
			}
		};
		fetchTodos();
	}, []);

	const handleAddTodo = async (value) => {
		try {
			await createTodo(value);

			setTodos([...todos, { text: value }]);
		} catch (e) {
			console.log("Error: ", e);
		}
	};

	return (
		<div className="App container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
						<h1>Todos</h1>
						<div className="todo-app">
							<AddTodo handleAddTodo={handleAddTodo} />
							<TodoList todos={todos} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
