import type { CreateTask } from "@/app/entity/Tasks";

export default async function doCreate(body: CreateTask) {
	const response = await fetch("/api/tasks", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...body,
		}),
	});
	return await response.json();
}
