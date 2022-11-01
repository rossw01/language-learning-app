import React from "react";
import LessonButton from "./LessonButton/LessonButton";
import "./LessonsPage.css";
import { Link } from "react-router-dom";

const LessonsPage = ({ selectedLesson, selectedLanguage, changeSelectedLesson}) => {
  const clickHandler = (lesson) => {
    console.log(`User selected ${lesson.name}`);
    changeSelectedLesson(lesson);
  }

	const buildLessonList = () => {
		let currentLessons = selectedLanguage.lessons.map((lesson, index) => {
			return (
        <Link to="/quiz" onClick={() => clickHandler(lesson)}>
  	      <LessonButton key={index} languageCode={selectedLanguage.languageCode} name={lesson.name} imagesrc={lesson.image} />
        </Link>
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

export default LessonsPage;
