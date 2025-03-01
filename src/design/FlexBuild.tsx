import type { AlignSelf, BackgroundColor, Margin, Padding } from "./entities";

type FlexBuildType = {
	children: React.ReactNode;
	alignSelf?: AlignSelf;
	backgroundColor?: BackgroundColor;
	margin?: Margin;
	padding?: Padding;
} & React.HTMLAttributes<HTMLDivElement>;

function FlexBuild({
	children,
	backgroundColor,
	alignSelf = "self-center",
	margin = "0",
	padding = "0",
	...props
}: FlexBuildType) {
	return (
		<div
			{...props}
			className={`${alignSelf} ${backgroundColor} ${padding} ${margin}`}
		>
			{children}
		</div>
	);
}

export default FlexBuild;
