import React from "react";
import "./ServiceBox.css";

export default function ServiceBox({ image, title, description }) {
  return (
    <div className="col-lg-4 col-md-6 col-11">
      <div className="service-box">
        <img src={image} alt={title} />
        <h4 className="title my-2">{title}</h4>
        <p className="text my-2">{description}</p>
      </div>
    </div>
  );
}
