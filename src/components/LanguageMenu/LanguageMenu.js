import React from "react";
import Language from "./Language/Language";
import { languages } from "./languageList";
import "./languageMenu.css";

const LanguageMenu = () => {
	const buildLanguageMenu = () => {
		let currentLangs = languages.map((language) => {
			return (
				<Language
					key={language.name}
					name={language.name}
					image={language.image}
					fact={language.fact}
				/>
			);
		});
		return currentLangs;
	};
	return (
		<>
			<div className="container">
				<h1 className="title">Select your language:</h1>
				<div className="row-display">{buildLanguageMenu()}</div>
			</div>
		</>
	);
};

export default LanguageMenu;
