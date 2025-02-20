import type { TypeListTask, TypeTask } from "@/app/entity/Tasks";
import { NextResponse } from "next/server";

const data: TypeTask[] = [];

// GET request
export async function GET() {
	const values: TypeListTask = { tasks: data };
	return NextResponse.json(values);
}

// POST request
export async function POST(req: Request) {
	const body = await req.json();
	body.id = Date.now();
	body.status = "created";
	body.createdAt = new Date().toISOString();
	data.push(body);
	return NextResponse.json({ message: "Task created", data: body });
}
