import Card from "@/design/Card";
import FlexBox from "@/design/FlexBox";
import Text from "@/design/Text";

type CardTaskType = {
	title: string;
	description: string;
	createdAt: string;
};
function CardTask({ title, description, createdAt }: CardTaskType) {
	return (
		<Card
			draggable
			margin="2"
			padding="2"
			border
			borderColor="border-x-gray-200"
			title={
				<Text fontSize="text-xl" color="text-gray-600" padding="1">
					{title}
				</Text>
			}
			description={
				<Text fontSize="text-md" color="text-gray-400" padding="x2">
					{description}
				</Text>
			}
		>
			<FlexBox flexDirection="flex-row-reverse">
				<Text color="text-zinc-500" fontSize="text-xs">
					{new Date(createdAt).toDateString()}
				</Text>
			</FlexBox>
		</Card>
	);
}

export default CardTask;
