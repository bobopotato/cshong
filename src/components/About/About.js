import "./About.css";
import AboutCube from "./AboutCube/AboutCube";
import LinkedIn from "../../assets/linkedin.png";
import WhatsApp from "../../assets/whatsapp.png";
import Resume from "../../assets/resume.png";
import MyCvPdf from "../../assets/ChongSoonHong_CV.pdf";
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
        I am currently working in <span>Strateq Group</span> as Software
        Engineer. The project that I am in-charge is <span>SIRIM project</span>.
        I am responsible for system maintanence and enhancement which I had to
        standby for technical support as well. The involved technicques that I
        use is <code>NodeJs</code>, <code>ReactJs</code> and <code>MSSQL</code>.
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
        </div>
      </div>
    </div>
  );
};

export default About;
