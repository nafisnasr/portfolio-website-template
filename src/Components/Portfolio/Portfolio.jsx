import React, { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./Portfolio.css";
import ImgBox from "../ImgBox/ImgBox";
import { portfolioImages } from "../../data";

export default function Portfolio() {
  const [images] = useState(portfolioImages);
  return (
    <div className="portfolio">
      <div className="container">
        <TitleSection text="Portfolio" />
        <div className="wrapper row">
          {images.map((image) => (
            <ImgBox key={image.id} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}
