import type { TypeStatusWiseTask, TypeTaskBody } from "@/app/entity/Tasks";
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

// GET request
export async function GET() {
	const totalData = (await redis.get("taskTracker")) || "{}";
	data = JSON.parse(totalData);
	return NextResponse.json(data);
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
	const task = data[body.status].find((val) => val.id === body.id);
	if (!task) {
		throw new Error("Task Not Found");
	}
	task.status = body.newStatus;
	await redis.set("taskTracker", JSON.stringify(data));
	return NextResponse.json({ message: "Task status updated", data: body });
}
