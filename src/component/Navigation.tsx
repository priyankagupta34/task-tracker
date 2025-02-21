import FlexBox from "@/design/FlexBox";
import FlexBuild from "@/design/FlexBuild";
import Input from "@/design/Input";
import Text from "@/design/Text";

export default function Navigation() {
	return (
		<FlexBox
			gap="5"
			backgroundColor="bg-cyan-500"
			padding="5"
			justifyContent="justify-between"
			position="sticky"
			top="top-0"
			boxShadow="shadow-sm shadow-cyan-500/50"
		>
			<FlexBuild>
				<Text fontSize="text-3xl" fontWeight="font-bold">
					Kanban
				</Text>
			</FlexBuild>
			<FlexBuild>
				<Input width="w-lg" />
			</FlexBuild>
		</FlexBox>
	);
}
