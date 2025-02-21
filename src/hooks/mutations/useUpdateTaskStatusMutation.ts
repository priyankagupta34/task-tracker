import type { TypeStatus, TypeTaskBody } from "@/app/entity/Tasks";

export default async function doUpdate(
	body: Omit<TypeTaskBody, "newStatus"> | null,
	newStatus: TypeStatus | null,
) {
	const response = await fetch("/api/tasks", {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...body,
			newStatus,
		}),
	});
	return await response.json();
}
