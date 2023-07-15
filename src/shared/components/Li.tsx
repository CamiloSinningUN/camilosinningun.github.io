import React from 'react';

function Li({ children }: { children: React.ReactNode }) {
	return (
		<li className="flex items-center gap-3">
			<span className="h-2 w-2 rotate-45 rounded-sm bg-softCyan" />
			{children}
		</li>
	);
}

export default Li;
