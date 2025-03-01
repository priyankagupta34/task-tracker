import Card from "@/design/Card";
import FlexBox from "@/design/FlexBox";
import Text from "@/design/Text";

type CardTaskType = {
	title: string;
	taskId: number;
	description?: string;
	createdAt: string;
	onClickExpand: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
function CardTask({
	title,
	taskId,
	// description,
	createdAt,
	onClickExpand,
	...props
}: CardTaskType) {
	const last4 = `${taskId}`.slice(-4);
	return (
		<Card
			{...props}
			draggable
			margin="2"
			padding="2"
			border
			backgroundColor="bg-white"
			borderColor="border-x-gray-200"
			onClick={onClickExpand}
			title={
				<FlexBox gap="3">
					<FlexBox borderRadius="rounded-md" padding="1">
						<Text
							fontSize="text-md"
							color="text-black"
							fontWeight="font-medium"
							padding="1"
						>
							<code className="bg-gray-600 text-white p-1 px-2 m-1 rounded-md">
								QC-{last4}
							</code>
							{title}
						</Text>
					</FlexBox>
				</FlexBox>
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
