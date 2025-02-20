type GridBuildProps = {
	margin?: string;
	padding?: string;
	children: React.ReactNode;
};
function GridBuild({ margin = "0", padding = "0", children }: GridBuildProps) {
	return <div className={`m-${margin} p-${padding}`}>{children}</div>;
}

export default GridBuild;
