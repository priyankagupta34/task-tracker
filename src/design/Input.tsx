import type { Width } from "./entities";

type InputProps = {
	width?: Width;
};
export default function Input({ width }: InputProps) {
	return <input className={`p-2 border outline-none rounded-md ${width}`} />;
}
