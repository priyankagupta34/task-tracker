import type { BorderColor, Height, MinHeight } from "./entities";

type GridBuildProps = {
	margin?: string;
	padding?: string;
	children: React.ReactNode;
	border?: boolean;
	height?: Height;
	minHeight?: MinHeight;
	borderStyle?: "border-solid" | "border-dashed" | "border-dotted";
	borderColor?: BorderColor;
} & React.HTMLAttributes<HTMLDivElement>;
function GridBuild({
	margin = "0",
	padding = "0",
	children,
	height = "h-full",
	minHeight = "min-h-auto",
	border = false,
	borderStyle = "border-solid",
	borderColor = "border-x-gray-800",
	...props
}: GridBuildProps) {
	return (
		<div
			{...props}
			className={`m-${margin} p-${padding} ${border ? "border" : ""} ${borderStyle} ${borderColor}  ${height} ${minHeight}`}
		>
			{children}
		</div>
	);
}

export default GridBuild;
