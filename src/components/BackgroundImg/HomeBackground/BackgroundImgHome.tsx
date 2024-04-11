/* eslint-disable @typescript-eslint/semi */
import React from "react";
import { Link } from "react-router-dom";
import "./HomeBackgroundImgStyle.css";
// import mainImg from "../../../assets/Background/home-background.jpg";

const resume =
  "Welcome to my portfolio! I’m a front-end developer who loves crafting visually delightful and easy-to-use interfaces. Take a look at my projects and skills, and feel free to contact me if you have any questions or would like to work together!";

const BackgroundImgHome = (): JSX.Element => {
  return (
    <div className="main">
      <div className="mask">
        {/* <img
          className="background-img"
          src={mainImg}
          alt="Stunning background"
        /> */}
      </div>
      <div className="content">
        <p>{"HI I'M STEFANIA DELISO"}</p>
        <h1>Front-end Developer </h1>
        <div className="resume">
          <p>{resume}</p>
          <p>More about me:</p>
        </div>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/about" className="btn btn-light">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImgHome;
