import React from "react";
import "./Footer.css";
import TitleSection from "../TitleSection/TitleSection";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <TitleSection text="Contact" />

          <div className="wrapper row">
            <div className="col-lg-6 col-11">
              <div className="left-box">
                <div className="info-box">
                  <img src="./images/footer/phone.png" alt="" />
                  <div className="text">
                    <span>+8801863-931220</span>
                    <span>+8801863-985220</span>
                  </div>
                </div>
                <div className="info-box">
                  <img src="./images/footer/mail.png" alt="" />
                  <div className="text">
                    <span>example@gmail.com</span>
                  </div>
                </div>
                <div className="info-box">
                  <img src="./images/footer/location.png" alt="" />
                  <div className="text">
                    <span>Zirabo, Ashulia, Savar, Dhaka</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-11">
              <div className="right-box">
                <div className="input-box my-3">
                  <input
                    className="input w-100"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>

                <div className="input-box my-3">
                  <input
                    className="input w-100"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>

                <div className="input-box my-3">
                  <input
                    type="text"
                    className="input duplicated-input"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    className="input duplicated-input"
                    placeholder="subject"
                  />
                </div>
                <div className="input-box my-3">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    className="input w-100"
                  ></textarea>
                </div>
                <div className="btn-container my-3">
                  <button className="input">send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container-fluid p-2">
          <div className="text">
            <p>Copywrite & Copy : 2023 | All Right Reserved by RIEAD</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
