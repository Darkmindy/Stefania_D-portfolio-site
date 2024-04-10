/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import ReactLogo from "../../assets/Icons/react-icon.png";
import TypeScriptLogo from "../../assets/Icons/typescript32.png";
import JavaScriptLogo from "../../assets/Icons/javascriptt.png";
import BootsrapLogo from "../../assets/Icons/bootstrap-logo.svg";

import MyPortfolio from "../../assets/Projects/MyPortfolio.png";
import DuckList from "../../assets/Projects/DuckList.png";
import Tictactoe from "../../assets/Projects/Tic-tac-toe.png";

const ProjectCardData = [
  {
    imgSrc: MyPortfolio,
    title: "Personal Portfolio 👩🏻‍💻",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: TypeScriptLogo, name: "TypeScript" },
    ],
    text: "This personal portfolio website",
    view: "https://github.com/Darkmindy/Stefania_D-portfolio-site.git",
    access: "", // Placeholder for access URL
  },
  {
    imgSrc: DuckList,
    title: "Ducky To-Do-List 🦆",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: TypeScriptLogo, name: "TypeScript" },
      { logo: BootsrapLogo, name: "Bootstrap" },
    ],
    text: "A to-do list with modify and delete buttons",
    view: "https://github.com/Darkmindy/Ducky-To-Do-List.git",
    access: "", // Placeholder for access URL
  },
  {
    imgSrc: Tictactoe,
    title: "Tic-Tac-Toe 🎮",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: JavaScriptLogo, name: "JavaScript" },
    ],
    text: "A simple Tic Tac Toe game, with sounds and emojis",
    view: "https://github.com/Darkmindy/TicTacToe-game.git",
    access: "", // Placeholder for access URL
  },
];

export default ProjectCardData;
