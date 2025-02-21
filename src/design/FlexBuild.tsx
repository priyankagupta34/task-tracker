import type { AlignSelf } from "./entities";

type FlexBuildType = {
	children: React.ReactNode;
	alignSelf?: AlignSelf;
} & React.HTMLAttributes<HTMLDivElement>;

function FlexBuild({
	children,
	alignSelf = "self-center",
	...props
}: FlexBuildType) {
	return (
		<div {...props} className={`${alignSelf}`}>
			{children}
		</div>
	);
}

export default FlexBuild;
