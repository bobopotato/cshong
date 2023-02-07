import "./HireMe.css";

const HireMe = ({ innerRef, innerStyle, text }) => {
  return (
    <div className="hire-me-container" ref={innerRef} style={innerStyle}>
      <span className="hire-me-text">{text}</span>
      {/* <span className="hire-me-text">I</span>
      <span className="hire-me-text">R</span>
      <span className="hire-me-text">E</span>
      <span className="hire-me-text"> </span>
      <span className="hire-me-text">M</span>
      <span className="hire-me-text">E</span> */}
    </div>
  );
};

export default HireMe;
