import React from "react";
import "./LessonButton.css";

const LessonButton = (props) => {
	console.log(props.imagesrc);
	return (
		<div className="lesson">
			<p>{props.name}</p>
			<img
				src={require(`../../../courses/id/images/${props.imagesrc}`)}
				alt={`'${props.name}' lesson`}
			/>
		</div>
	);
};

export default LessonButton;
