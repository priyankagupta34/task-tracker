"use client";

import React, {
	type Dispatch,
	type SetStateAction,
	useEffect,
	useState,
} from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import Showdown from "showdown";

type MDEditorProps = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	showEditor?: boolean;
};
const MDEditor = ({ value, setValue, showEditor }: MDEditorProps) => {
	const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

	useEffect(() => {
		if (showEditor) {
			setSelectedTab("write");
		} else setSelectedTab("preview");
	}, [showEditor]);

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true,
	});

	return (
		<div className="w-full max-w-2xl mx-auto p-4 border rounded-md">
			<ReactMde
				value={value}
				onChange={setValue}
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
				generateMarkdownPreview={(markdown) =>
					Promise.resolve(converter.makeHtml(markdown))
				}
			/>
		</div>
	);
};

export default MDEditor;
