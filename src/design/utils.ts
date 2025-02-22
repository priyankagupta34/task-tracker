import type { TypeStatus } from "@/app/entity/Tasks";
import type { Gap, GridTemplates, Margin, Padding } from "./entities";

export function getPadding(val: Padding) {
	const values = {
		0: "p-0",
		1: "p-1",
		2: "p-2",
		3: "p-3",
		4: "p-4",
		5: "p-5",
		x1: "px-1",
		x2: "px-2",
		x3: "px-3",
		x4: "px-4",
		x5: "px-5",
		y1: "py-1",
		y2: "py-2",
		y3: "py-3",
		y4: "py-4",
		y5: "py-5",
		t1: "pt-1",
		t2: "pt-2",
	};
	return values[val];
}

export function getMargin(val: Margin) {
	const values = {
		0: "m-0",
		1: "m-1",
		2: "m-2",
		3: "m-3",
		4: "m-4",
		5: "m-5",
		x1: "mx-1",
		x2: "mx-2",
		x3: "mx-3",
		x4: "mx-4",
		x5: "mx-5",
		y1: "my-1",
		y2: "my-2",
		y3: "my-3",
		y4: "my-4",
		y5: "my-5",
		t5: "mt-5",
	};
	return values[val];
}

export function getGap(val: Gap) {
	const values = {
		0: "gap-0",
		2: "gap-2",
		1: "gap-1",
		3: "gap-3",
		4: "gap-4",
		5: "gap-5",
	};
	return values[val];
}

export function getGridTemplateColumns(val: GridTemplates) {
	const values = {
		0: "grid-cols-0",
		1: "grid-cols-1",
		2: "grid-cols-2",
		3: "grid-cols-3",
		4: "grid-cols-4",
		5: "grid-cols-5",
		6: "grid-cols-6",
		7: "grid-cols-7",
		8: "grid-cols-8",
		9: "grid-cols-9",
	};
	return values[val];
}

export function getChipsColor(val: TypeStatus) {
	switch (val) {
		case "created":
			return "bg-cyan-300";
		case "inprogress":
			return "bg-yellow-100";
		case "released":
			return "bg-amber-300";
		case "done":
			return "bg-lime-400";
		case "testing":
			return "bg-teal-400";
		case "todo":
			return "bg-sky-300";
		default:
			return "white";
	}
}
