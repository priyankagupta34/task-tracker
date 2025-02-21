import type {
	AlignItems,
	FlexType,
	Gap,
	JustifyContent,
	Padding,
} from "./entities";
import { getGap, getMargin, getPadding } from "./utils";

type StackType = {
	children: React.ReactNode;
	flexDirection?: FlexType;
	gap?: Gap;
	justifyContent?: JustifyContent;
	alignItems?: AlignItems;
	margin?: Padding;
	padding?: Padding;
} & React.HTMLAttributes<HTMLDivElement>;

function FlexBox({
	children,
	flexDirection = "flex-row",
	gap = "0",
	justifyContent = "justify-normal",
	alignItems = "items-start",
	margin = "0",
	padding = "0",
	...props
}: StackType) {
	return (
		<div
			className={`flex ${flexDirection} ${getGap(gap)} ${justifyContent} ${alignItems} ${getMargin(margin)} ${getPadding(padding)}`}
			{...props}
		>
			{children}
		</div>
	);
}

export default FlexBox;
