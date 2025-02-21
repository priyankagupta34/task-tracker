import type { BorderColor } from "./entities";

type GridBuildProps = {
	margin?: string;
	padding?: string;
	children: React.ReactNode;
	border?: boolean;
	borderStyle?: "border-solid" | "border-dashed" | "border-dotted";
	borderColor?: BorderColor;
} & React.HTMLAttributes<HTMLDivElement>;
function GridBuild({
	margin = "0",
	padding = "0",
	children,
	border = false,
	borderStyle = "border-solid",
	borderColor = "border-x-gray-800",
	...props
}: GridBuildProps) {
	return (
		<div
			{...props}
			className={`m-${margin} p-${padding} ${border ? "border" : ""} ${borderStyle} ${borderColor}`}
		>
			{children}
		</div>
	);
}

export default GridBuild;
