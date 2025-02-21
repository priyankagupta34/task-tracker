import type { BorderColor, BoxShadow, Margin, Padding } from "./entities";
import { getMargin, getPadding } from "./utils";

type CardType = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> & {
	title: React.ReactNode;
	description: React.ReactNode;
	children: React.ReactNode;
	border?: boolean;
	borderColor?: BorderColor;
	margin?: Margin;
	padding?: Padding;
	boxShadow?: BoxShadow;
};

function Card({
	title,
	description,
	children,
	border = false,
	borderColor = "border-black",
	margin = "0",
	padding = "0",
	boxShadow = "shadow-md",
	...props
}: CardType) {
	return (
		<div
			className={`${border ? "border" : ""} ${borderColor} rounded-md ${getMargin(margin)} ${getPadding(padding)} ${boxShadow} `}
			{...props}
		>
			<div>{title}</div>
			<div>{description}</div>
			<div>{children}</div>
		</div>
	);
}

export default Card;
