import React from "react";
import "./LessonButton.css";

const LessonButton = (props) => {
  console.log(props);
	return (
		<div className="lesson">
			<p>{props.name}</p>
			<img
				src={require(`../../../courses/${props.languageCode}/images/${props.imagesrc}`)}
				alt={`'${props.name}' lesson`}
			/>
		</div>
	);
};

export default LessonButton;
