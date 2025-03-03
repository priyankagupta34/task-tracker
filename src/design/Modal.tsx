import { useEffect, useState } from "react";
import FlexBox from "./FlexBox";
import ReactDOM from "react-dom";

type ModalProps = {
	open: boolean;
	children: React.ReactNode;
	closeModal: () => void;
};
export default function Modal({ open, closeModal, children }: ModalProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (!open) return null;

	return mounted
		? ReactDOM.createPortal(
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
						overflow="overflow-auto"
					>
						{children}
					</FlexBox>
				</FlexBox>,
				document.body,
			)
		: null;
}

/**
 * 
 *     position: fixed;
    background: #00000096;
    height: 100vh;
    width: 100vw;
 */
