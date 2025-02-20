type FlexBuildType = {
	children: React.ReactNode;
};

function FlexBuild({ children }: FlexBuildType) {
	return <div>{children}</div>;
}

export default FlexBuild;
