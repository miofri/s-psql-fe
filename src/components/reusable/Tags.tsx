import React from "react";

export const Tags = ({ tag }: { tag: string }) => {
	return (
		<div>
			<button>x</button> <span>{tag}</span>
		</div>
	);
};
