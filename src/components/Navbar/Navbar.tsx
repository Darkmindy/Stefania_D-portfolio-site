/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../assets/Icons/icon.png";
import firma from "../../assets/Background/firma.png";

export default function Navbar(): JSX.Element {
  const [click, setClick] = useState(false);
  const handleClick = (): void => setClick(!click);

  const [show, setShow] = useState(true);
  const controlNavbar = (): void => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={show ? "nav" : "nav-hidden"}>
      <div className="header">
        <Link to="/">
          <img className="icon-small" src={icon} alt="icon" />
          <img className="firma" src={firma} alt="firma" />
        </Link>
        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={handleClick}
        >
          <li>
            <Link className="menu-item" to="/">
              Home
            </Link>
            <Link className="menu-item" to="/about">
              About
            </Link>
            <Link className="menu-item" to="/projects">
              Projects
            </Link>
            <Link className="menu-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="barsMenu" onClick={handleClick}>
          // eslint-disable-next-line multiline-ternary
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
}
