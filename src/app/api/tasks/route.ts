import type {
	TypeStatusWiseTask,
	TypeTask,
	TypeTaskBody,
} from "@/app/entity/Tasks";
import { NextResponse } from "next/server";
import redis from "../lib/redis";

let data: TypeStatusWiseTask = {
	todo: [],
	inprogress: [],
	created: [],
	done: [],
	testing: [],
	released: [],
};

async function fetchTasks() {
	const totalData = (await redis.get("taskTracker")) || "{}";
	data = JSON.parse(totalData);
	return data;
}

// GET request
export async function GET() {
	const dataVals = await fetchTasks();
	return NextResponse.json(dataVals);
}

// POST request
export async function POST(req: Request) {
	const body = await req.json();
	body.id = Date.now();
	body.status = "created";
	body.createdAt = new Date().toISOString();
	data.created.push(body);
	await redis.set("taskTracker", JSON.stringify(data));
	return NextResponse.json({ message: "Task created", data: body });
}

export async function PATCH(req: Request) {
	const body: TypeTaskBody = await req.json();

	data = await fetchTasks();

	const taskIdx = (data[body.status] || []).findIndex(
		(val) => val.id === body.id,
	);
	if (taskIdx === -1) {
		throw new Error("Task Not Found");
	}
	const thisTask: TypeTask = data[body.status][taskIdx];
	thisTask.updatedAt = new Date().toISOString();
	data[body.status].splice(taskIdx, 1);
	thisTask.status = body.newStatus;
	data[body.newStatus].unshift(thisTask);
	await redis.set("taskTracker", JSON.stringify(data));
	return NextResponse.json({ done: true });
}

export async function DELETE() {
	await redis.set(
		"taskTracker",
		JSON.stringify({
			todo: [],
			inprogress: [],
			created: [],
			done: [],
			testing: [],
			released: [],
		}),
	);
	data = {
		todo: [],
		inprogress: [],
		created: [],
		done: [],
		testing: [],
		released: [],
	};
	return NextResponse.json({ done: true });
}
