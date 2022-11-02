import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LanguageMenu from "./components/LanguageMenu/LanguageMenu";
import LessonsPage from "./components/LessonsPage/LessonsPage";
import Lesson from "./components/Lesson/Lesson.jsx";
import "./fonts.css";

function App() {
	// Selected Language handler
	const [selectedLanguage, changeSelectedLanguage] = useState(
		"Error, selected language not updated"
	);
  const [selectedLesson, changeSelectedLesson] = useState("Error, lesson wasn't selected!");
  
	return (
		<Routes>
			<Route
				path="/"
				element={
					<LanguageMenu changeSelectedLanguage={changeSelectedLanguage} />
				}
			/>
			<Route
				path="/lessons"
				element={<LessonsPage selectedLesson = {selectedLesson} selectedLanguage={selectedLanguage} changeSelectedLesson={changeSelectedLesson}/>}
			/>
      <Route
        path = "/quiz"
        element={<Lesson selectedLanguage = {selectedLanguage} selectedLesson={selectedLesson}/>}
      />
		</Routes>
	);
}

export default App;
