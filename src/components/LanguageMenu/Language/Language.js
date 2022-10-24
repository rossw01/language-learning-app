import React from "react";
import "./language.css";

const Language = (props) => {
	return (
		// name, flag, fact
		<div className="card">
			<p className="heading">{props.name}</p>
			<img
				className="flag"
				src={require(`../../../flags/${props.image}`)}
				alt={`${props.name} Flag`}
			/>
			<p className="subtext">{props.fact}</p>
		</div>
	);
};

export default Language;
