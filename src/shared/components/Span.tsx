import React from 'react';

function Span({ children }: { children: React.ReactNode }) {
	return <span className="text-softCyan">{' ' + children + ' '}</span>;
}

export default Span;
