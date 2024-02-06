import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper row">
          <div className="col-lg-6 col-11">
            <div className="text-container">
              <h5 className="orange">Hi, Its me</h5>
              <h2 className="title">MD RIEAD MIA</h2>
              <h4>
                And i'm a <span className="orange">Frontend Developer</span>
              </h4>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis maiores cupiditate eum Lorem ipsum dolor sit amet.
              </p>
              <div className="social-media-container">
                <span className="icon-box">
                  <FaFacebookF className="icon" />
                </span>
                <span className="icon-box">
                  <FaLinkedinIn className="icon" />
                </span>
                <span className="icon-box">
                  <FaGithub className="icon" />
                </span>
                <span className="icon-box">
                  <FaInstagram className="icon" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-11">
            <div className="img-container">
              <img
                src="./images/header-img.png"
                alt="@NafisNasr"
                className="container-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
