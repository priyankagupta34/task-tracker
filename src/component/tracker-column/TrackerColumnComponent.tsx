import type { TypeStatus, TypeTask } from "@/app/entity/Tasks";
import CardTask from "./CardTask";
import Text from "@/design/Text";
import GridBuild from "@/design/GridBuild";

type TrackerColumnComponentProps = {
	type: TypeStatus;
	tasks: TypeTask[];
	onDropHandler: (dropStatus: TypeStatus) => void;
	onDragStartHandler: (task: TypeTask) => void;
} & React.HTMLAttributes<HTMLDivElement>;

function TrackerColumnComponent({
	tasks,
	type,
	onDragStartHandler,
	onDropHandler,
	...props
}: TrackerColumnComponentProps) {
	return (
		<GridBuild
			padding="8"
			minHeight="min-h-screen"
			border
			onDrop={() => onDropHandler(type)}
			borderStyle="border-dashed"
			borderColor="border-x-gray-400"
			{...props}
		>
			<Text fontSize="text-4xl">{type}</Text>
			{tasks.map((task: TypeTask) => {
				const { title, description, createdAt, id } = task;
				return (
					<CardTask
						onDragStart={() => onDragStartHandler(task)}
						key={id}
						title={title}
						description={description}
						createdAt={createdAt}
					/>
				);
			})}
		</GridBuild>
	);
}

export default TrackerColumnComponent;
