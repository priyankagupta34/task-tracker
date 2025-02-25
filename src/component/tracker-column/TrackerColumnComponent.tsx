import type { TypeStatus, TypeTask } from "@/app/entity/Tasks";
import CardTask from "./CardTask";
import GridBuild from "@/design/GridBuild";
import FlexBox from "@/design/FlexBox";
import Chips from "@/design/Chips";
import TaskComponent from "../TaskComponent";
import { useState } from "react";

type TrackerColumnComponentProps = {
	type: TypeStatus;
	dragOverType: null | TypeStatus;
	tasks: TypeTask[];
	onDropHandler: (dropStatus: TypeStatus) => void;
	onDragOverHandler: (dropStatus: TypeStatus) => void;
	onDragStartHandler: (task: TypeTask) => void;
} & React.HTMLAttributes<HTMLDivElement>;

function TrackerColumnComponent({
	tasks,
	type,
	dragOverType,
	onDragStartHandler,
	onDropHandler,
	onDragOverHandler,
	...props
}: TrackerColumnComponentProps) {
	const [taskId, setTaskId] = useState<number | undefined>();
	const [openModal, setOpenModal] = useState(false);
	return (
		<GridBuild
			padding="8"
			onDragOver={(e) => {
				e.preventDefault();
				onDragOverHandler(type);
			}}
			minHeight="min-h-screen"
			border
			onDrop={() => onDropHandler(type)}
			borderStyle="border-dashed"
			backgroundColor={dragOverType === type ? "bg-teal-50" : "bg-white"}
			borderColor={dragOverType === type ? "border-black" : "border-x-gray-400"}
			{...props}
		>
			<FlexBox
				justifyContent="justify-center"
				alignItems="items-center"
				margin="3"
			>
				<Chips value={type} status={type} />
			</FlexBox>
			{tasks.map((task: TypeTask) => {
				const { title, description, createdAt, id } = task;
				return (
					<CardTask
						onDragStart={() => onDragStartHandler(task)}
						key={id}
						title={title}
						description={description}
						createdAt={createdAt}
						onClickExpand={() => {
							setTaskId(id);
							setOpenModal(true);
						}}
					/>
				);
			})}
			<TaskComponent
				taskId={taskId}
				open={openModal}
				closeModal={() => {
					setOpenModal(false);
					setTaskId(undefined);
				}}
			/>
		</GridBuild>
	);
}

export default TrackerColumnComponent;
