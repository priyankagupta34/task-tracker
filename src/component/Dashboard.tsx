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
	const { statusTasks } = useFetchTasksQuery();
	const [gotStatusTasks, setGotStatus] = useState<
		undefined | TypeStatusWiseTask
	>(statusTasks);

	const [taskToUpdate, setTaskToUpdate] = useState<TypeTask | null>(null);
	const [dragOverType, setDragOverType] = useState<TypeStatus | null>(null);

	useEffect(() => {
		setGotStatus(statusTasks);
	}, [statusTasks]);

	const onDragStartHandler = (task: TypeTask) => {
		setTaskToUpdate(task);
	};

	const onDropHandler = async (dropStatus: TypeStatus) => {
		if (dropStatus && taskToUpdate) {
			const update = { ...taskToUpdate };
			const statusToChange = taskToUpdate.status;
			const taskIdx = (gotStatusTasks?.[statusToChange] || []).findIndex(
				(val) => val.id === taskToUpdate.id,
			);
			if (taskIdx === -1 || !gotStatusTasks) return;
			const thisTask: TypeTask = gotStatusTasks[statusToChange][taskIdx];
			gotStatusTasks[statusToChange].splice(taskIdx, 1);
			thisTask.status = dropStatus;
			gotStatusTasks[dropStatus].push(thisTask);
			setGotStatus({ ...gotStatusTasks });
			await doUpdate(update, dropStatus);
			setTaskToUpdate(null);
			setDragOverType(null);
		}
	};

	const onDragOverHandler = (dropStatus: TypeStatus) => {
		setDragOverType(dropStatus);
	};
	return (
		<FlexBox
			alignItems="items-center"
			flexDirection="flex-col"
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
							dragOverType={dragOverType}
							tasks={gotStatusTasks[status] || []}
							onDragStartHandler={onDragStartHandler}
							onDropHandler={onDropHandler}
							onDragOverHandler={onDragOverHandler}
						/>
					))}
			</GridBox>
		</FlexBox>
	);
}
