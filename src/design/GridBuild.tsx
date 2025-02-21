import type {
	BackgroundColor,
	BorderColor,
	Height,
	MinHeight,
} from "./entities";

type GridBuildProps = {
	margin?: string;
	padding?: string;
	children: React.ReactNode;
	border?: boolean;
	height?: Height;
	minHeight?: MinHeight;
	borderStyle?: "border-solid" | "border-dashed" | "border-dotted";
	borderColor?: BorderColor;
	backgroundColor?: BackgroundColor;
} & React.HTMLAttributes<HTMLDivElement>;
function GridBuild({
	margin = "0",
	padding = "0",
	children,
	height = "h-auto",
	minHeight = "min-h-auto",
	border = false,
	borderStyle = "border-solid",
	borderColor = "border-x-gray-800",
	backgroundColor = "transparent",
	...props
}: GridBuildProps) {
	return (
		<div
			{...props}
			className={`m-${margin} p-${padding} ${border ? "border" : ""} ${borderStyle} ${borderColor}  ${height} ${minHeight} ${backgroundColor}`}
		>
			{children}
		</div>
	);
}

export default GridBuild;
