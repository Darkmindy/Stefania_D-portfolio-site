/* eslint-disable @typescript-eslint/comma-dangle */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Background/FE logo.png";
import "./NavbarStyles.css";

const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
};

const MENU_ITEMS = [
  { route: ROUTES.HOME, label: "Home" },
  { route: ROUTES.ABOUT, label: "About" },
  { route: ROUTES.PROJECTS, label: "Projects" },
  { route: ROUTES.CONTACT, label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const handleMenuClick = () => setMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    setNavbarVisible(window.scrollY <= 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isNavbarVisible ? "nav" : "nav-hidden"}>
      <div className="header">
        <Link to={ROUTES.HOME}>
          <img className="logo" src={logo} alt="SD_logo" />
        </Link>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <Link to={item.route} className="menu-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="barsMenu" onClick={handleMenuClick}>
          {isMenuOpen ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
