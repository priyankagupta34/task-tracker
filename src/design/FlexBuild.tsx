type FlexBuildType = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function FlexBuild({ children, ...props }: FlexBuildType) {
	return <div {...props}>{children}</div>;
}

export default FlexBuild;
