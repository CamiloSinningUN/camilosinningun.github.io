interface Props {
	children?: React.ReactNode;
}

function Item({ children }: Props) {
	return (
		<li className="opacity-80 transition delay-75 duration-150 ease-in-out hover:opacity-100">
			{children}
		</li>
	);
}

export default Item;
