import type {
	AlignItems,
	AlignSelf,
	Animation,
	BackgroundColor,
	BgOpacity,
	BorderRadius,
	BoxShadow,
	FlexType,
	Gap,
	Height,
	JustifyContent,
	Margin,
	Overflow,
	Padding,
	Position,
	Top,
	Width,
} from "./entities";
import { getGap, getMargin, getPadding } from "./utils";

type StackType = {
	children: React.ReactNode;
	flexDirection?: FlexType;
	gap?: Gap;
	justifyContent?: JustifyContent;
	alignItems?: AlignItems;
	margin?: Margin;
	padding?: Padding;
	backgroundColor?: BackgroundColor;
	position?: Position;
	top?: Top;
	boxShadow?: BoxShadow;
	width?: Width;
	height?: Height;
	bgOpacity?: BgOpacity;
	borderRadius?: BorderRadius;
	animation?: Animation;
	overflow?: Overflow;
	alignSelf?: AlignSelf;
} & React.HTMLAttributes<HTMLDivElement>;

function FlexBox({
	children,
	flexDirection = "flex-row",
	gap = "0",
	justifyContent = "justify-normal",
	alignItems = "items-start",
	margin = "0",
	padding = "0",
	position = "static",
	top = "top-0",
	backgroundColor = "transparent",
	boxShadow = "shadow-none",
	width = "w-auto",
	height = "h-auto",
	animation = "animate-none",
	bgOpacity = "bg-opacity-100",
	borderRadius = "rounded-none",
	alignSelf = "",
	overflow = "",
	...props
}: StackType) {
	return (
		<div
			className={`flex ${flexDirection} ${getGap(gap)} ${justifyContent} ${alignItems} ${getMargin(margin)} ${getPadding(padding)} ${backgroundColor} ${position} ${top} ${boxShadow} ${width} ${height} ${bgOpacity} ${borderRadius} ${animation} ${overflow} duration-10 ${alignSelf}`}
			{...props}
		>
			{children}
		</div>
	);
}

export default FlexBox;
