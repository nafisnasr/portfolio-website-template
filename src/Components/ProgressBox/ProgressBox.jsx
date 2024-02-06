import React from "react";
import "./ProgressBox.css";

export default function ProgressBox({title,value}) {
  return (
    <div className="progressbox row" >
    <p className="title col-3">{title}</p>
    <div className="progress p-0 col-9">
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow={`${value}`}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
    </div >

  );
}
