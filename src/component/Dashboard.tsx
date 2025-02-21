"use client";

import TrackerColumnComponent from "@/component/tracker-column/TrackerColumnComponent";
import GridBox from "@/design/GridBox";
import FlexBox from "@/design/FlexBox";
import useFetchTasksQuery from "@/hooks/query/useFetchTasksQuery";
import type {
	TypeStatus,
	TypeStatusWiseTask,
	TypeTask,
} from "@/app/entity/Tasks";
import { StatusList } from "./utils";
import type { GridTemplates } from "@/design/entities";
import { useEffect, useState } from "react";
import doUpdate from "@/hooks/mutations/useUpdateTaskStatusMutation";

export default function Dashboard() {
	const { statusTasks, refetch } = useFetchTasksQuery();
	const [gotStatusTasks, setGotStatus] = useState<
		undefined | TypeStatusWiseTask
	>(statusTasks);

	const [taskToUpdate, setTaskToUpdate] = useState<TypeTask | null>(null);

	useEffect(() => {
		setGotStatus(statusTasks);
	}, [statusTasks]);

	const onDragStartHandler = (task: TypeTask) => {
		setTaskToUpdate(task);
	};

	const onDropHandler = async (dropStatus: TypeStatus) => {
		if (dropStatus && taskToUpdate) {
			await doUpdate(taskToUpdate, dropStatus);
			setTaskToUpdate(null);
			const values = await refetch();
			console.log("values", values);
			setGotStatus(values);
		}
	};
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
				{gotStatusTasks &&
					StatusList.map((status: TypeStatus) => (
						<TrackerColumnComponent
							key={status}
							type={status}
							tasks={gotStatusTasks[status] || []}
							onDragStartHandler={onDragStartHandler}
							onDropHandler={onDropHandler}
						/>
					))}
			</GridBox>
		</FlexBox>
	);
}
