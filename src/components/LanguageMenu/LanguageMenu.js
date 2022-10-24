import React, { useState } from "react";
import { Link } from "react-router-dom";
import Language from "./Language/Language";
import { languages } from "./languageList";
import "./LanguageMenu.css";

const LanguageMenu = ({ changeSelectedLanguage }) => {
	const [lang, changeLang] = useState(0);

	const buildLanguageMenu = () => {
		let currentLangs = languages.map((props, index) => {
			return (
				<Language
					key={props.name}
					name={props.name}
					image={props.image}
					fact={props.fact}
					changeLang={changeLang}
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
				<Link to="/lessons" component={<Language />}>
					<button
						className="select-language"
						onClick={() => changeSelectedLanguage(lang)}
					>
						Select
					</button>
				</Link>
			</div>
		</>
	);
};

export default LanguageMenu;
