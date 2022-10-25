import React from "react";
import LessonButton from "./LessonButton/LessonButton";
import "./LessonsPage.css";

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
		<div className="lessons-page-container">
			<h1>{selectedLanguage.name}</h1>
			<div className="fb-col lessons-page">
				<div className="fb-col lessons-list">{buildLessonList()}</div>
			</div>
		</div>
	);
};

export default LessonPage;
