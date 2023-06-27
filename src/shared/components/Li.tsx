import React from 'react';

function Li({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-3">
			<div className="h-2 w-2 rotate-45 rounded-sm bg-softCyan" />
			<li>{children}</li>
		</div>
	);
}

export default Li;
