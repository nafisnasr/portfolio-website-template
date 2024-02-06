import React from "react";
import "./TitleSection.css";

export default function TitleSection({ text, coloredText }) {
  return (
    <div className="titlesection">
      <h3 className="title">
        {text} <span className="orange">{coloredText}</span>
      </h3>
    </div>
  );
}
