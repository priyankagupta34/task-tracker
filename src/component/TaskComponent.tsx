import Modal from "@/design/Modal";
import MDEditor from "./MDEditor";
import { useEffect, useState } from "react";
import FlexBox from "@/design/FlexBox";
import Input from "@/design/Input";
import Button from "@/design/Button";
import doCreate from "@/hooks/mutations/useCreateTaskMutation";
import type { TypeTask } from "@/app/entity/Tasks";
import useFetchTaskQuery from "@/hooks/query/useFetchTaskQuery";
import { AiTwotoneSave } from "react-icons/ai";

import FlexBuild from "@/design/FlexBuild";

type TaskComponentProps = {
	taskId?: number;
	open: boolean;
	type?: "create" | "edit";
	closeModal: () => void;
};
export default function TaskComponent({
	taskId,
	open,
	closeModal,
	type = "create",
}: TaskComponentProps) {
	const taskReceived: TypeTask | undefined = useFetchTaskQuery(taskId);
	const [title, setTitle] = useState<string>("");
	const [value, setValue] = useState<string>("");
	// const [task, setTask] = useState<TypeTask | null>();

	useEffect(() => {
		setTitle(taskReceived?.title || "");
		setValue(taskReceived?.description || "");
	}, [taskReceived]);
	// console.log("taskReceived", taskReceived);
	async function saveChanges() {
		await doCreate({ title, description: value });
		closeModal();
	}
	if (!open) return null;
	return (
		<Modal open={open} closeModal={closeModal}>
			<FlexBox
				flexDirection="flex-col"
				gap="5"
				width="w-screen"
				position="relative"
			>
				<Input
					width="w-full"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<MDEditor
					setValue={setValue}
					value={value}
					showEditor={type === "create"}
				/>
				<FlexBox flexDirection="flex-row-reverse" width="w-full">
					<Button onClick={saveChanges}>
						<FlexBox gap="2">
							<FlexBuild alignSelf="self-center">Save Changes</FlexBuild>
							<FlexBuild alignSelf="self-center">
								<AiTwotoneSave />
							</FlexBuild>
						</FlexBox>
					</Button>
				</FlexBox>
			</FlexBox>
		</Modal>
	);
}
