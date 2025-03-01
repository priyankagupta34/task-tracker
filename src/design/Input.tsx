import type { Width } from "./entities";

type InputProps = {
	width?: Width;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ width, ...props }: InputProps) {
	return (
		<input
			className={`p-2 border outline-none rounded-md ${width}`}
			{...props}
		/>
	);
}
