type CardType = {
	title: React.ReactNode;
	description: React.ReactNode;
	children: React.ReactNode;
};
function Card({ title, description, children }: CardType) {
	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
			<div>{children}</div>
		</div>
	);
}

export default Card;
