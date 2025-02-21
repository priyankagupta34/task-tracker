import type { Gap, GridTemplates, Margin, Padding } from "./entities";
import { getGap, getGridTemplateColumns, getMargin, getPadding } from "./utils";
import clsx from "clsx";

type StackType = {
	children: React.ReactNode;
	gridTemplateColumns?: GridTemplates;
	gap?: Gap;
	margin?: Margin;
	padding?: Padding;
} & React.HTMLAttributes<HTMLDivElement>;

function GridBox({
	children,
	gridTemplateColumns = "1",
	gap = "1",
	margin = "0",
	padding = "0",
	...props
}: StackType) {
	return (
		<div
			{...props}
			className={clsx(
				`grid ${getGridTemplateColumns(gridTemplateColumns)} ${getGap(gap)} ${getMargin(margin)} ${getPadding(padding)}`,
			)}
		>
			{children}
		</div>
	);
}

export default GridBox;
