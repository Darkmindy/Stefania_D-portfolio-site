/* eslint-disable @typescript-eslint/semi */
import React from "react";
import "./HomeBackgroundImgStyle.css";
import mainImg from "../../../assets/Background/home-background.jpg";
import { Link } from "react-router-dom";
const resume = `Welcome to my portfolio! I’m a front-end developer who loves crafting visually delightful and easy-to-use interfaces.Take a look at my projects and skills, and feel free to contact me if you have any questions or would like to work together!`;

export default function BackgroundImgHome(): JSX.Element {
  return (
    <div className="main">
      <div className="mask">
        <img className="background-img" src={mainImg} alt="main-image" />
      </div>
      <div className="content">
        <p>{"HI I'M STEFANIA DELISO"}</p>
        <h1>Front-end Developer</h1>
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
}
