import { Link } from "react-scroll";
import React from "react";
import "./intro.css";
import hireme from "../../assets/hireme.png";
import introimg from "../../assets/image.png";
import ReactTyped from "react-typed";
const intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">Aditya</span>
          <br />
          
        </span>
        <span className="introskill">
            {" "}
            <ReactTyped
              strings={[
                "Web Developer",
                "Blockchain Developer",
                "SmartContract Developer",
                "JAVA Developer",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </span>
        <div className="intropara">
          I am a passionate web developer with a deep interest in blockchain
          technology, I constantly seek <br />
          innovative ways to bridge the digital world with decentralized
          solutions.
        </div>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="hireme"
        >
          <button className="btn">
            <img src={hireme} alt="" className="btnnameimg" />
            HireMe
          </button>
        </Link>
      </div>
      <img src={introimg} alt="img" className="bg" />
    </section>
  );
};

export default intro;
