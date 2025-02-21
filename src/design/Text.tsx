import type { Margin, Padding, TextTranform } from "./entities";
import { getMargin, getPadding } from "./utils";

type TextType = {
	children: React.ReactNode;
	fontFamily?: "font-serif" | "font-mono" | "font-sans";
	fontWeight?:
		| "font-thin"
		| "font-extralight"
		| "font-normal"
		| "font-medium"
		| "font-semibold"
		| "font-bold";
	fontSize?:
		| "text-xs"
		| "text-sm"
		| "text-md"
		| "text-base"
		| "text-lg"
		| "text-xl"
		| "text-2xl"
		| "text-3xl"
		| "text-4xl"
		| "text-5xl"
		| "text-6xl"
		| "text-7xl"
		| "text-8xl"
		| "text-9xl";
	color?:
		| "black"
		| "white"
		| "text-sky-300"
		| "text-gray-400"
		| "text-gray-100"
		| "text-gray-200"
		| "text-gray-600"
		| "text-gray-700"
		| "text-gray-800"
		| "text-gray-500"
		| "text-zinc-500"
		| "text-gray-50";
	margin?: Margin;
	padding?: Padding;
	textTranform?: TextTranform;
} & React.HTMLAttributes<HTMLDivElement>;
function Text({
	children,
	fontFamily = "font-sans",
	fontWeight = "font-normal",
	fontSize = "text-base",
	color = "black",
	margin = "0",
	padding = "0",
	textTranform = "normal-case",
	...props
}: TextType) {
	return (
		<p
			{...props}
			className={`${fontWeight} ${fontFamily} ${fontSize} ${color} 
			${getMargin(margin)} 
			${getPadding(padding)} ${textTranform}`}
		>
			{children}
		</p>
	);
}

export default Text;
