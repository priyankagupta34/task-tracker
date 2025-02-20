type StackType = {
	children: React.ReactNode;
	flexDirection?:
		| "flex-row"
		| "flex-row-reverse"
		| "flex-col"
		| "flex-col-reverse";
	gap?: number;
	justifyContent?:
		| "justify-start"
		| "justify-end"
		| "justify-center"
		| "justify-between"
		| "justify-around"
		| "justify-evenly"
		| "justify-stretch"
		| "justify-baseline"
		| "justify-normal";
	alignItems?:
		| "items-start"
		| "items-end"
		| "items-center"
		| "items-baseline"
		| "items-stretch";
	margin?: number;
	padding?: number;
};

function FlexBox({
	children,
	flexDirection = "flex-row",
	gap = 0,
	justifyContent = "justify-normal",
	alignItems = "items-start",
	margin = 0,
	padding = 0,
}: StackType) {
	return (
		<div
			className={`flex ${flexDirection} gap-${gap} ${justifyContent} ${alignItems} ${margin} ${padding}`}
		>
			{children}
		</div>
	);
}

export default FlexBox;
