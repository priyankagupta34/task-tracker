type CardType = {
	title: React.ReactNode;
	description: React.ReactNode;
	children: React.ReactNode;
	borderWidth?: string;
};
function Card({ title, description, children, borderWidth = "0" }: CardType) {
	return (
		<div className={`border-${borderWidth}`}>
			<div>{title}</div>
			<div>{description}</div>
			<div>{children}</div>
		</div>
	);
}

export default Card;
