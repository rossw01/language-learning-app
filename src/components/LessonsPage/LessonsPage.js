import React from "react";

const LessonPage = (props) => {
	props = props.selectedLanguage;
	console.log(props);
	return (
		<div>
			<h1>{props.name}</h1>
		</div>
	);
};

export default LessonPage;
