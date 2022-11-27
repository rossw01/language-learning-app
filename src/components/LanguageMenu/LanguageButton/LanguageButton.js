import React from "react";
import "./Language.css";

const Language = (props) => {
  const clickHandle = () => {
    props.changeSubmitIsDisabled(false);
    props.changeLang({
      name: props.name,
      image: props.image,
      languageCode: props.languageCode,
      fact: props.fact,
      lessons: props.lessons,
    });
  };
  return (
    // name, flag, fact
    <button
      className="card"
      onClick={() => clickHandle()}
      style={
        props.lang.name === props.name
          ? { border: "8px solid #007585" }
          : { border: "none" }
      }
    >
      <p className="heading">{props.name}</p>
      <img
        className="flag"
        src={require(`../../../courses/${props.languageCode}/flag.svg`)}
        // LanguageButton image no longer checks 'Flags' folder.
        alt={`${props.name} Flag`}
      />
      <p className="subtext">{props.fact}</p>
    </button>
  );
};

export default Language;
