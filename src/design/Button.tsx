type ButtonProps = {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			{...props}
			className="border rounded-md px-5 py-1 hover:bg-sky-100 transition delay-150 duration-200 ease-in-out "
		>
			{children}
		</button>
	);
}
