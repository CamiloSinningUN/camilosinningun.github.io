import React from 'react';

interface Props {
	children: React.ReactNode;
	leftSpace?: boolean;
	rightSpace?: boolean;
}

function Span({ children, leftSpace = true, rightSpace = true }: Props) {
	return (
		<span className="text-softCyan">
			{leftSpace && ' '}
			{children}
			{rightSpace && ' '}
		</span>
	);
}

export default Span;
