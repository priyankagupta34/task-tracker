import { NextResponse } from "next/server";
import { fetchTasks } from "../route";
import type { NextApiRequest } from "next";

// GET request
export async function GET(
	_: NextApiRequest,
	{ params }: { params: { id: string } },
) {
	const dataVals = await fetchTasks();
	const { id } = await params;
	const found = Object.values(dataVals)
		.flat()
		.find((i) => `${i.id}` === id);
	if (!found) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}
	return NextResponse.json(found);
}
