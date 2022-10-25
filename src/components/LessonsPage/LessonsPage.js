import React from "react";
import LessonButton from "./LessonButton/LessonButton";

const LessonPage = ({ selectedLanguage }) => {
	const buildLessonList = () => {
		let currentLessons = selectedLanguage.lessons.map((lesson, index) => {
			return (
				<LessonButton key={index} name={lesson.name} imagesrc={lesson.image} />
			);
		});
		return currentLessons;
	};

	return (
		<div>
			<h1>{selectedLanguage.name}</h1>
			<div>{buildLessonList()}</div>
		</div>
	);
};

export default LessonPage;
