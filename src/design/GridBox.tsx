import type { Gap, GridTemplates, Margin, Padding, Width } from "./entities";
import { getGap, getGridTemplateColumns, getMargin, getPadding } from "./utils";
import clsx from "clsx";

type StackType = {
	children: React.ReactNode;
	gridTemplateColumns?: GridTemplates;
	gap?: Gap;
	margin?: Margin;
	padding?: Padding;
	width?: Width;
} & React.HTMLAttributes<HTMLDivElement>;

function GridBox({
	children,
	gridTemplateColumns = "1",
	gap = "1",
	margin = "0",
	padding = "0",
	width = "w-auto",
	...props
}: StackType) {
	return (
		<div
			{...props}
			className={clsx(
				`grid ${getGridTemplateColumns(gridTemplateColumns)} ${getGap(gap)} ${getMargin(margin)} ${getPadding(padding)} ${width}`,
			)}
		>
			{children}
		</div>
	);
}

export default GridBox;
