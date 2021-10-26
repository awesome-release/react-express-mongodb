import axios from "axios";

const client = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_API || "http://backend:4000"
});

export async function getTodos() {
	return await client.get("/api/todos");
}

export async function createTodo(value) {
	return await client.post("/api/todos", { text: value });
}
