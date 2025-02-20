import type { TypeTask } from "@/app/entity/Tasks";
import CardTask from "./CardTask";
import Text from "@/design/Text";
import GridBuild from "@/design/GridBuild";

type TrackerColumnComponentProps = {
	tasks: TypeTask[];
	type: string;
};
function TrackerColumnComponent({ tasks, type }: TrackerColumnComponentProps) {
	return (
		<GridBuild padding="8">
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
