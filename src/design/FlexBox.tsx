import type {
	AlignItems,
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
	...props
}: StackType) {
	return (
		<div
			className={`flex ${flexDirection} ${getGap(gap)} ${justifyContent} ${alignItems} ${getMargin(margin)} ${getPadding(padding)} ${backgroundColor} ${position} ${top} ${boxShadow} ${width} ${height} ${bgOpacity} ${borderRadius} ${animation} duration-10`}
			{...props}
		>
			{children}
		</div>
	);
}

export default FlexBox;
