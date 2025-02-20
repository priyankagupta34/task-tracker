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
		| "text-zinc-300"
		| "text-gray-50";
	margin?: string;
	padding?: string;
};
function Text({
	children,
	fontFamily = "font-serif",
	fontWeight = "font-normal",
	fontSize = "text-base",
	color = "black",
	margin = "0",
	padding = "0",
}: TextType) {
	return (
		<p
			className={`${fontWeight} ${fontFamily} ${fontSize} ${color} m-${margin} p-${padding}`}
		>
			{children}
		</p>
	);
}

export default Text;
