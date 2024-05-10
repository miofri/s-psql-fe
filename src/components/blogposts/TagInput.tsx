import React, { useState } from "react";
import { Tags } from "../reusable/Tags";

export const TagInput = () => {
	const [tags, setTags] = useState<string[]>([]);
	return (
		<div>
			<div>
				{tags.map((tag) => (
					<Tags tag={tag} />
				))}
			</div>
			<input></input>
		</div>
	);
};
