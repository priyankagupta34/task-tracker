export type TypeTask = {
	id: number;
	title: string;
	description: string;
	status: TypeStatus;
	createdAt: string;
};

export type TypeStatus =
	| "todo"
	| "inprogress"
	| "created"
	| "done"
	| "testing"
	| "released";

export type TypeListTask = { tasks: TypeTask[] };

export type TypeStatusWiseTask = {
	[key in TypeStatus]: TypeTask[];
};

export type TypeTaskBody = TypeTask & { newStatus: TypeStatus };
