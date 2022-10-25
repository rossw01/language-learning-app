import React, { useState } from "react";
import { Link } from "react-router-dom";
import { languages } from "../../languages";
import LanguageButton from "./LanguageButton/LanguageButton";
import "./LanguageMenu.css";

const LanguageMenu = ({ changeSelectedLanguage }) => {
	const [lang, changeLang] = useState(0);
	// Prevents user from clicking "Select" button before selecting a language
	const [submitIsDisabled, changeSubmitIsDisabled] = useState(true);

	const buildLanguageMenu = () => {
		let currentLangs = languages.map((props, index) => {
			return (
				<LanguageButton
					key={index}
					name={props.name}
					image={props.image}
					fact={props.fact}
					lessons={props.lessons}
					changeLang={changeLang}
					changeSubmitIsDisabled={changeSubmitIsDisabled}
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
				<Link to="/lessons" component={<LanguageButton />}>
					<button
						disabled={submitIsDisabled}
						className="select-button"
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
