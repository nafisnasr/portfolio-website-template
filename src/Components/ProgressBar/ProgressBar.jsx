import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./ProgressBar.css";
import ProgressBox from "../ProgressBox/ProgressBox";

export default function ProgressBar() {
  return (
    <div className="progressbar">
      <TitleSection text="My" coloredText="Skills" />
      <div className="container">
        <div className="wrapper row">
          <div className="progress-container">
            <ProgressBox title="html" value={100} />
            <ProgressBox title="CSS" value={95} />
            <ProgressBox title="javascript" value={75} />
            <ProgressBox title="React js" value={80} />
            <ProgressBox title="Next js" value={75} />
          </div>
        </div>
      </div>
    </div>
  );
}
