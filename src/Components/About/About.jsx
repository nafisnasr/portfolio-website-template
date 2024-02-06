import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <TitleSection text="About" coloredText="Me" />
        <div className="wrapper row">
          <div className="col-lg-5 col-11">
            <div className="img-container">
              <img
                src="./images/about-img.png"
                alt="@NafisNasr"
                className="container-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7 col-11">
            <div className="text-container">
              <h3 className="title">Frontend Developer</h3>
              <h3 className="title">Graphic Designer</h3>
              <p className="text my-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum eius cum veritatis quos? Architecto neque,
                minima velit veritatis magni repudiandae explicabo possimus,
                iure harum libero perferendis qui. Sapiente, quidem. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nulla, excepturi
                nihil modi rerum impedit eos consequuntur unde reiciendis
                obcaecati dolorum?
              </p>
              <button className="more-btn my-2">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
