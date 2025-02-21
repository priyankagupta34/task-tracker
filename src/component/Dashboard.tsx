"use client";

import TrackerColumnComponent from "@/component/tracker-column/TrackerColumnComponent";
import GridBox from "@/design/GridBox";
import FlexBox from "@/design/FlexBox";
import useFetchTasksQuery from "@/hooks/query/useFetchTasksQuery";
import type { TypeStatus, TypeStatusWiseTask } from "@/app/entity/Tasks";
import { StatusList } from "./utils";
import type { GridTemplates } from "@/design/entities";

export default function Dashboard() {
	const statusTasks: undefined | TypeStatusWiseTask = useFetchTasksQuery();
	return (
		<FlexBox
			alignItems="items-center"
			flexDirection="flex-col"
			margin="y5"
			onDragOver={(e) => e.preventDefault()}
		>
			<GridBox
				gridTemplateColumns={`${StatusList.length}` as GridTemplates}
				gap="2"
			>
				{statusTasks &&
					StatusList.map((status: TypeStatus) => (
						<TrackerColumnComponent
							key={status}
							type={status}
							tasks={statusTasks[status] || []}
						/>
					))}
			</GridBox>
		</FlexBox>
	);
}
