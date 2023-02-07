import { useState } from "react";
import "./AboutCube.css";

const AboutCube = ({
  img,
  link,
  title,
  detail,
  hslColor1,
  hslColor2,
  brightness1,
  brightness2,
  id,
  download
}) => {
  const color1 = hslColor1 + (brightness1 - 20) + "%)";
  const color2 = hslColor2 + (brightness2 - 20) + "%)";

  const hoverColor1 = hslColor1 + brightness1 + "%)";
  const hoverColor2 = hslColor2 + brightness2 + "%)";

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="about-cube-container">
      <AboutCuteDetail detail={detail} isHovering={isHovering} />
      <a
        id={id}
        className="about-cube"
        style={{
          "--hslColor1": color1,
          "--hslColor2": color2,
          "--hoverColor1": hoverColor1,
          "--hoverColor2": hoverColor2
        }}
        href={link || download}
        target="_blank"
        rel="noreferrer"
        download={download ? true : false}
        onMouseEnter={() => {
          return setIsHovering(true);
        }}
        onMouseLeave={() => {
          return setIsHovering(false);
        }}
      >
        <div className="about-cube-page">
          <img src={img} alt={title}></img>
        </div>
        <div className="about-cube-page"></div>
        <div className="about-cube-page"></div>
        <div className="about-cube-page"></div>
        <div className="about-cube-page"></div>
        <div className="about-cube-page"></div>
      </a>
    </div>
  );
};

const AboutCuteDetail = ({ detail, isHovering }) => {
  return (
    <div className={`about-cube-detail ${isHovering ? "active" : ""}`}>
      <div className="about-cube-detail-page">{detail}</div>
      <div className="about-cube-detail-page"></div>
      <div className="about-cube-detail-page"></div>
    </div>
  );
};

export default AboutCube;
