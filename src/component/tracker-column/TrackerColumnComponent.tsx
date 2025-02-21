import type { TypeStatus, TypeTask } from "@/app/entity/Tasks";
import CardTask from "./CardTask";
import Text from "@/design/Text";
import GridBuild from "@/design/GridBuild";

type TrackerColumnComponentProps = {
	type: TypeStatus;
	tasks: TypeTask[];
};
function TrackerColumnComponent({ tasks, type }: TrackerColumnComponentProps) {
	return (
		<GridBuild
			padding="8"
			border
			borderStyle="border-dashed"
			borderColor="border-x-gray-400"
		>
			<Text fontSize="text-4xl">{type}</Text>
			{tasks.map(({ title, description, createdAt, id }) => (
				<CardTask
					key={id}
					title={title}
					description={description}
					createdAt={createdAt}
				/>
			))}
		</GridBuild>
	);
}

export default TrackerColumnComponent;
