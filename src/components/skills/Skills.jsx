import React from "react";
import "./Skills.css";
import WebDesign from '../../assets/website-design.png'
import Smartcontract from '../../assets/sm.png'
import Appdesign from '../../assets/app-design.png'
import App from "../../App";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skilldesc">
        I am a skilled and passionate web developer with a passion for crafting dynamic and
        user-friendly websites that leave a lasting impression. Proficient in
        front-end and back-end technologies, dedicated to delivering innovative
        digital solutions.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={WebDesign} alt="webdesign" className="skillbarimg" />
          <div className="skillbartxt">
            <h2>Web design</h2>
            <p>Full stack web design using MERN stack and Django</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={Smartcontract} alt="smartcontract" id="smartimgs" className="skillbarimg" />
          <div className="skillbartxt">
            <h2>Smart Contract development</h2>
            <p>web3 application and smartcontracts development using solidity.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={Appdesign} alt="java" className="skillbarimg" />
          <div className="skillbartxt">
            <h2>Java application design</h2>
            <p> Data structure and algorithm in java,Java application development and Testing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
