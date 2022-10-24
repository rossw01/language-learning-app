import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LanguageMenu from "./components/LanguageMenu/LanguageMenu";
import LessonsPage from "./components/LessonsPage/LessonsPage";
import "./fonts.css";

function App() {
	// Selected Language handler
	const [selectedLanguage, changeSelectedLanguage] = useState(
		"Error, selected language not updated"
	);

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
				element={<LessonsPage selectedLanguage={selectedLanguage} />}
			/>
		</Routes>
	);
}

export default App;
