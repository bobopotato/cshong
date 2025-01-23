import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";
import ProgrammerIcon from "../../assets/coding-cat-gif.gif";
import UseScrollReveal, { Direction } from "../../hooks/UseScrollReveal";
import UseIntersection from "../../hooks/UseIntersection";

const Home = () => {
  const multipleText = useRef(null);
  const myHomePage = useRef(null);
  const isVisible = UseIntersection(myHomePage);

  UseScrollReveal({
    classNames: ["intro-container1"],
    direction: Direction.right,
  });

  UseScrollReveal({
    classNames: ["intro-container2"],
    direction: Direction.right,
    delay: 800,
  });

  useEffect(() => {
    const options = {
      strings: ["Software Engineer.", "Passionate Coder.", "Team Player."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    };

    if (!multipleText) {
      return;
    }
    const typer = new Typed(multipleText?.current, options);

    return () => typer.destroy();
  }, [multipleText]);

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.setProperty(
        "--floating-ball-transform",
        ""
      );
    } else {
      document.documentElement.style.setProperty(
        "--floating-ball-transform",
        "translateX(-200vw) translateY(-200vh)"
      );
    }
  }, [isVisible]);

  return (
    <div className="home-page" id="home-page">
      <div className="intro-container1" ref={myHomePage}>
        <div>
          <h3>Desmond Chong</h3>
        </div>
        <h1>
          I am a<span className="multiple-text" ref={multipleText}></span>
        </h1>
        <p>
          Programming isn't about what you know, it's about what you can figure
          out.
        </p>
      </div>
      <div className="intro-container2">
        <img className="home-profile" src={ProgrammerIcon} alt="profile"></img>
      </div>
    </div>
  );
};

export default Home;
