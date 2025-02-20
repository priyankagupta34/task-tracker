import Card from "@/design/Card";
import FlexBox from "@/design/FlexBox";
import FlexBuild from "@/design/FlexBuild";
import Text from "@/design/Text";

type CardTaskType = {
	title: string;
	description: string;
	createdAt: string;
};
function CardTask({ title, description, createdAt }: CardTaskType) {
	return (
		<Card
			title={
				<Text fontSize="text-2xl" color="text-gray-400" padding="5">
					{title}
				</Text>
			}
			description={
				<Text fontSize="text-lg" color="text-gray-400" padding="1">
					{description}
				</Text>
			}
		>
			<FlexBox>
				<FlexBuild>
					<Text color="text-gray-100">
						{new Date(createdAt).toDateString()}
					</Text>
				</FlexBuild>
			</FlexBox>
		</Card>
	);
}

export default CardTask;
