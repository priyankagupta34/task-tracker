type StackType = {
	children: React.ReactNode;
	gridTemplateColumns?: `grid-cols-${number}`;
	gap?: string;
	margin?: string;
	padding?: string;
};

function GridBox({
	children,
	gridTemplateColumns = "grid-cols-1",
	gap = "1",
	margin = "0",
	padding = "0",
}: StackType) {
	return (
		<div
			className={`grid ${gridTemplateColumns} gap-${gap} m-${margin} p-${padding}`}
		>
			{children}
		</div>
	);
}

export default GridBox;
