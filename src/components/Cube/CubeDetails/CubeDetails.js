import "./CubeDetails.css";
import { memo } from "react";

const CubeDetails = ({
  title,
  name,
  description,
  experience,
  innerClass,
  onPressScrollTo,
  scrollToPosition
}) => {
  return (
    <div
      className={`cube-details-inner-container ${innerClass ? innerClass : ""}`}
    >
      <div
        className="cube-card-container"
        onClick={() => {
          console.log(scrollToPosition);
          return window.scrollTo(0, scrollToPosition + 100);
        }}
      >
        <div className="cube-details-title">{title}</div>
        <div className="cube-details-desc">
          <div className="grid-item-1">{"{\n"}</div>
          <div className="grid-item-2">skillName</div>
          <div className="grid-item-3">{name}</div>
          <div className="grid-item-4">description</div>
          <div className="grid-item-5">{description}</div>
          <div className="grid-item-6">learnFrom</div>
          <div className="grid-item-7">{experience}</div>
          <div className="grid-item-8">{"\n}"}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CubeDetails);
