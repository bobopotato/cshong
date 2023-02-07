import { useEffect, useRef, useState, memo } from "react";
import "./Cube.css";
import UseIntersection from "../../hooks/UseIntersection";
import CubeDetails from "./CubeDetails/CubeDetails";

import Nodejs from "../../assets/nodejs.png";
import ReactImage from "../../assets/react.png";
import Javascript from "../../assets/javascript.png";
import MSSQL from "../../assets/MsSql.png";
import Flutter from "../../assets/flutter.png";
import Swift from "../../assets/swift-og.png";
// import UseScrollReveal from "./UseScrollReveal";

const Cube = ({ scrollY }) => {
  const myCube = useRef(null);
  const isVisible = UseIntersection(myCube);
  const [checkPoint, setCheckPoint] = useState(null);
  const [currentCheckPoint, setCurrentCheckPoint] = useState(0);
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const page4Ref = useRef();
  const page5Ref = useRef();
  const page6Ref = useRef();

  const [resized, setResized] = useState(false);
  const [resizing, setResizing] = useState(false);
  const resizingRef = useRef(resizing);

  const _setResizing = (bool) => {
    resizingRef.current = bool;
    return setResizing(bool);
  }

  // UseScrollReveal({ classNames: ["reveal1", "reveal2"] });

  useEffect(() => {
    const changeCubeSide = () => {
      // console.log(`scrolling`);
      // if (scrolling) {
      //   return;
      // }
      if (!checkPoint) {
        return;
      }

      const initialY = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--cube-initial-y-position");

      document.documentElement.style.setProperty("--cube-z-position", "0deg");

      if (scrollY >= checkPoint.point6) {
        document.documentElement.style.setProperty(
          "--cube-x-position",
          "70deg"
        );
        document.documentElement.style.setProperty("--cube-y-position", "0deg");
        document.documentElement.style.setProperty(
          "--cube-z-position",
          `calc(0deg - ${initialY})`
        );

        setCurrentCheckPoint(6);
      } else if (scrollY >= checkPoint.point5) {
        document.documentElement.style.setProperty(
          "--cube-x-position",
          "-110deg"
        );
        document.documentElement.style.setProperty("--cube-y-position", "0deg");
        document.documentElement.style.setProperty(
          "--cube-z-position",
          `${initialY}`
        );

        setCurrentCheckPoint(5);
      } else if (scrollY >= checkPoint.point4) {
        document.documentElement.style.setProperty(
          "--cube-x-position",
          "-20deg"
        );
        document.documentElement.style.setProperty(
          "--cube-y-position",
          `calc(-270deg + ${initialY})`
        );
        setCurrentCheckPoint(4);
      } else if (scrollY >= checkPoint.point3) {
        document.documentElement.style.setProperty(
          "--cube-x-position",
          "-20deg"
        );
        document.documentElement.style.setProperty(
          "--cube-y-position",
          `calc(-180deg + ${initialY})`
        );
        setCurrentCheckPoint(3);
      } else if (scrollY >= checkPoint.point2) {
        document.documentElement.style.setProperty(
          "--cube-x-position",
          "-20deg"
        );
        document.documentElement.style.setProperty(
          "--cube-y-position",
          `calc(-90deg + ${initialY})`
        );
        setCurrentCheckPoint(2);
      } else if (scrollY >= checkPoint.point1 || scrollY < checkPoint.point2) {
        document.documentElement.style.setProperty(
          "--cube-x-position",
          "-20deg"
        );
        document.documentElement.style.setProperty(
          "--cube-y-position",
          `${initialY}`
        );
        setCurrentCheckPoint(1);
      }
    };

    changeCubeSide();
    // window.addEventListener("scroll", (e) => changeCubeSide(e));

    // return () => {
    //   window.removeEventListener("scroll", (e) => changeCubeSide(e));
    // };
  }, [scrollY]);

  window.addEventListener("resize", () => {
    // console.log(`nani`);
    scrollBackToHome();
    return setResized(true);
  });

  const scrollBackToHome = () => {
    if (resizingRef.current) {
      return; // if resizing then back
    }
    console.log(`resizing ${scrollY} `)
    _setResizing(true);
    setTimeout(()=> {
      return _setResizing(false);
    }, 500)
    const scrollingContainer = document.querySelector(".App");
    scrollingContainer.scrollTo(0,0, 'smooth');
    setCheckPoint(null);
  }

  useEffect(() => {
    if (isVisible && !checkPoint) {
      let vhHeight = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--inner-skill-page-height");

      vhHeight = vh(85 - 85 / 6);
      setCheckPoint({
        point1: scrollY,
        point2: scrollY + vhHeight * 1,
        point3: scrollY + vhHeight * 2,
        point4: scrollY + vhHeight * 3,
        point5: scrollY + vhHeight * 4,
        point6: scrollY + vhHeight * 5
      });
      setResized(false);
    }
  }, [isVisible]);

  const vh = (percent) => {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (percent * h) / 100;
  };

  const getPagerInfo = (index) => {
    if (index === currentCheckPoint) {
      return "active selected";
    } else if (index === currentCheckPoint - 1) {
      return "active prev";
    } else if (index === currentCheckPoint + 1) {
      return "active next";
    } else {
      return "";
    }
  };

  return (
    <div className="wrapper">
      <div className="reveal-container">
        <div className="reveal1" id="skills-page">
          <div className="cube-container">
            <h1>Skills</h1>
            <div className="cube" ref={myCube}>
              <div className="cube-page">
                <img src={Nodejs} alt="node-js" />
              </div>
              <div className="cube-page">
                <img src={ReactImage} alt="react-js" />
              </div>
              <div className="cube-page">
                <img src={Javascript} alt="javascript" />
              </div>
              <div className="cube-page">
                <img src={MSSQL} alt="ms-sql" />
              </div>
              <div className="cube-page">
                <img src={Flutter} alt="flutter" />
              </div>
              <div className="cube-page">
                <img src={Swift} alt="swift" />
              </div>
            </div>
          </div>
        </div>
        <div className="reveal2">
          <div className="cube-details-container">
            <CubeDetails
              title="skills[0] ="
              name="Node js"
              description="Used for backend to create Api"
              experience="Work & self learn"
              innerClass={getPagerInfo(1)}
              // onPressScrollTo={page1Ref}
              scrollToPosition={checkPoint?.point1}
            />
            <CubeDetails
              title="skills[1] = "
              name="React js"
              description="Used for frontend to build up UI/UX"
              experience="Work & self learn"
              innerClass={getPagerInfo(2)}
              // onPressScrollTo={page2Ref}
              scrollToPosition={checkPoint?.point2}
            />
            <CubeDetails
              title="skills[2] = "
              name="Javascript"
              description="Have knowledge of basic javascript"
              experience="Work & self learn"
              innerClass={getPagerInfo(3)}
              // onPressScrollTo={page3Ref}
              scrollToPosition={checkPoint?.point3}
            />
            <CubeDetails
              title="skills[3] = "
              name="MS SQL"
              description="Database used to store all the data"
              experience="Work & education"
              innerClass={getPagerInfo(4)}
              // onPressScrollTo={page4Ref}
              scrollToPosition={checkPoint?.point4}
            />
            <CubeDetails
              title="skills[4] = "
              name="Flutter"
              description="Used to build hybrid mobile application"
              experience="Work & internship"
              innerClass={getPagerInfo(5)}
              // onPressScrollTo={page5Ref}
              scrollToPosition={checkPoint?.point5}
            />
            <CubeDetails
              title="skills[5] = "
              name="Swift"
              description="Specified language that used to develop ios mobile application"
              experience="Work & internship"
              innerClass={getPagerInfo(6)}
              // onPressScrollTo={page6Ref}
              scrollToPosition={checkPoint?.point6}
            />
          </div>
        </div>
      </div>

      <div className="fake-container">
        <div className="fake-page" ref={page1Ref}></div>
        <div className="fake-page" ref={page2Ref}></div>
        <div className="fake-page" ref={page3Ref}></div>
        <div className="fake-page" ref={page4Ref}></div>
        <div className="fake-page" ref={page5Ref}></div>
        <div className="fake-page" ref={page6Ref}></div>
      </div>
    </div>
  );
};

export default memo(Cube);
