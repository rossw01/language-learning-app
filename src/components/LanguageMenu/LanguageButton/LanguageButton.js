import React from "react";
import "./Language.css";

const Language = (props) => {
	const clickHandle = () => {
		props.changeSubmitIsDisabled(false);
		props.changeLang({
			name: props.name,
			image: props.image,
			fact: props.fact,
			lessons: props.lessons,
		});
	};
	return (
		// name, flag, fact
		<div className="card" onClick={() => clickHandle()}>
			<p className="heading">{props.name}</p>
			<img
				className="flag"
				src={require(`../../../courses/${props.languageCode}/flag.svg`)}
				// LanguageButton image no longer checks 'Flags' folder.
				alt={`${props.name} Flag`}
			/>
			<p className="subtext">{props.fact}</p>
		</div>
	);
};

export default Language;
