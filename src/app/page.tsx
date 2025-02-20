"use client";

import TrackerColumnComponent from "@/component/tracker-column/TrackerColumnComponent";
import useFetchTasksQuery from "@/hooks/query/useFetchTasksQuery";
import type { TypeTask } from "./entity/Tasks";
import GridBox from "@/design/GridBox";

export default function Home() {
	const tasks: TypeTask[] = useFetchTasksQuery();
	console.log("tasks", tasks);
	return (
		<div>
			<GridBox gridTemplateColumns="grid-cols-4">
				<TrackerColumnComponent tasks={tasks} type="todo" />
				<TrackerColumnComponent tasks={tasks} type="inprogress" />
				<TrackerColumnComponent tasks={tasks} type="done" />
				<TrackerColumnComponent tasks={tasks} type="released" />
			</GridBox>
		</div>
	);
}
