import Modal from "@/design/Modal";

type TaskComponentProps = {
	taskId?: number;
	open: boolean;
	closeModal: () => void;
};
export default function TaskComponent({
	taskId,
	open,
	closeModal,
}: TaskComponentProps) {
	console.log("taskId", taskId);
	if (!taskId) return null;
	return (
		<Modal open={open} closeModal={closeModal}>
			hiii
		</Modal>
	);
}
