import "./About.css";
import AboutCube from "./AboutCube/AboutCube";
import LinkedIn from "../../assets/linkedin.png";
import WhatsApp from "../../assets/whatsapp.png";
import Resume from "../../assets/resume.png";
import GithubWhite from "../../assets/github-white.webp";
import MyCvPdf from "../../assets/desmond_cv.pdf";
// import UseScrollReveal, { Direction } from "./UseScrollReveal";

const About = () => {
  // UseScrollReveal({
  //   classNames: ["about-title"],
  //   direction: Direction.left
  // });

  // UseScrollReveal({
  //   classNames: ["about-content"],
  //   direction: Direction.right
  // });

  // UseScrollReveal({
  //   classNames: ["about-link-container"]
  // });

  return (
    <div className="about-container" id="about-page">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        I am currently working in <span>Qashier</span> as Full Stack Developer.
        I am in charge in both of front-end and back-end.
      </div>
      <div className="about-content-2">
        <div>
          <span>In charges of:</span>
          <ul>
            <li>User Onboarding process</li>
            <li>KYC application with multiple payment channels</li>
            <li>Personalized scheduler for different clients</li>
            <li>System maintanence and enhancement</li>
            <li>etc</li>
          </ul>
        </div>
        <div>
          <span>Tech stack:</span>
          <ul>
            <li>Server - Google Cloud</li>
            <li>Backend - NodeJs microservices</li>
            <li>Frontend - VueJs</li>
            <li>Database - Firebase & PostgreSQL</li>
          </ul>
        </div>
      </div>
      <div className="about-link-container">
        <div className="about-link">
          <AboutCube
            img={LinkedIn}
            title="LinkedIn"
            detail="Hire me"
            hslColor1="hsl(201, 100%,"
            hslColor2="hsl(201, 100%,"
            brightness1="35"
            brightness2=" 45"
            link={"https://www.linkedin.com/in/chong-soon-hong-2b54171b9/"}
          />
          <AboutCube
            id="what"
            img={WhatsApp}
            title="WhatsApp"
            detail="Message me"
            hslColor1="hsl(133, 55%,"
            hslColor2="hsl(133, 65%,"
            brightness1="50"
            brightness2="60"
            link={`https://wa.link/y73u5j`}
          />
          <AboutCube
            img={Resume}
            title="Resume"
            detail="Get my CV"
            hslColor1="hsl(0, 100%,"
            hslColor2="hsl(0, 100%,"
            brightness1="45"
            brightness2=" 60"
            download={MyCvPdf}
          />
          <AboutCube
            img={GithubWhite}
            title="Github"
            detail="Have a look"
            hslColor1="hsl(0, 0%,"
            hslColor2="hsl(0, 0%,"
            brightness1="10"
            brightness2="15"
            link={`https://github.com/bobopotato`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
