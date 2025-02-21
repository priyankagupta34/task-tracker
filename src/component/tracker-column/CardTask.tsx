import Card from "@/design/Card";
import FlexBox from "@/design/FlexBox";
import Text from "@/design/Text";

type CardTaskType = {
	title: string;
	description: string;
	createdAt: string;
} & React.HTMLAttributes<HTMLDivElement>;
function CardTask({ title, description, createdAt, ...props }: CardTaskType) {
	return (
		<Card
			{...props}
			draggable
			margin="2"
			padding="2"
			border
			backgroundColor="bg-white"
			borderColor="border-x-gray-200"
			title={
				<Text
					fontSize="text-md"
					color="text-gray-600"
					padding="1"
					fontWeight="font-semibold"
				>
					{title}
				</Text>
			}
			description={
				<Text fontSize="text-md" color="text-gray-500" padding="x1">
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
