/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/semi */
import React from "react";
import "./FooterStyle.css";
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a
                href="https://wa.me/+393247860089"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp me!
              </a>
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a
                href="mailto:stefania.deliso1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email me!
              </a>
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/stefaniad91/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a
              href="https://github.com/Darkmindy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
