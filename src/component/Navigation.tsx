import FlexBox from "@/design/FlexBox";
import FlexBuild from "@/design/FlexBuild";
import Input from "@/design/Input";
import Text from "@/design/Text";

export default function Navigation() {
	const showGithub = () => {
		const url = "https://github.com/priyankagupta34/task-tracker";
		window.open(url, "_blank");
	};
	return (
		<FlexBox
			gap="5"
			backgroundColor="bg-black"
			padding="5"
			justifyContent="justify-between"
			position="sticky"
			top="top-0"
			boxShadow="shadow-sm shadow-cyan-500/50"
		>
			<FlexBuild>
				<FlexBox>
					<FlexBuild alignSelf="self-center">
						<Text fontSize="text-3xl" fontWeight="font-bold" color="text-white">
							Kanban
						</Text>
					</FlexBuild>
					<FlexBuild alignSelf="self-center">
						<Text
							fontSize="text-lg"
							fontWeight="font-bold"
							color="text-gray-600"
							padding="t2"
							onClick={() => showGithub()}
						>
							Github
						</Text>
					</FlexBuild>
				</FlexBox>
			</FlexBuild>
			<FlexBuild>
				<Input width="w-lg" />
			</FlexBuild>
		</FlexBox>
	);
}
