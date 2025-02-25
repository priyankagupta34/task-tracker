import FlexBox from "./FlexBox";
import ReactDOM from "react-dom";

type ModalProps = {
	open: boolean;
	children: React.ReactNode;
	closeModal: () => void;
};
export default function Modal({ open, closeModal, children }: ModalProps) {
	if (!open) return null;
	return ReactDOM.createPortal(
		<FlexBox
			justifyContent="justify-center"
			alignItems="items-center"
			width="w-screen"
			height="h-screen"
			onClick={closeModal}
			position="fixed"
			backgroundColor="bg-black"
			bgOpacity="bg-opacity-60"
		>
			<FlexBox
				backgroundColor="bg-white"
				onClick={(e) => e.stopPropagation()}
				boxShadow="shadow-lg"
				animation="animate-bounce-once"
				padding="5"
				borderRadius="rounded-md"
				width="w-5/6"
				height="h-5/6"
			>
				{children}
			</FlexBox>
		</FlexBox>,
		document.body,
	);
}

/**
 * 
 *     position: fixed;
    background: #00000096;
    height: 100vh;
    width: 100vw;
 */
