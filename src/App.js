import { useState, useRef, useEffect } from "react";
import "./index.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Cube from "./components/Cube/Cube";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import HireMe from "./components/HireMe/HireMe";
// import { useEventListener, AnimatedCursor } from "./useEventListener";

export default function App() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollingRef = useRef(scrolling);

  const _setScrolling = (bool) => {
    scrollingRef.current = bool;
    return setScrolling(bool);
  };

  useEffect(() => {
    const getScrollPosition = (scrollingContainer) => {
      setScrolling(true);
      setTimeout(() => {
        return _setScrolling(false);
      }, 500);
      if (scrollingRef.current) {
        return;
      }
      return setScrollY(scrollingContainer.scrollTop);
      // return console.log(scrollingContainer.scrollTop);
    };

    const scrollingContainer = document.querySelector(".App");
    scrollingContainer.addEventListener(
      "scroll",
      (e) => getScrollPosition(scrollingContainer),
      {
        passive: true,
      }
    );

    return () => {
      scrollingContainer.removeEventListener(
        "scroll",
        (e) => getScrollPosition(scrollingContainer),
        { passive: true }
      );
    };
  }, []);

  return (
    <div className="App">
      {/* <AnimatedCursor /> */}
      <Menu>
        <Home />
        <Cube scrollY={scrollY} />
        <About />
      </Menu>
      {/* <div className="wave-wrapper" id="wave-wrapper"> */}
      {/* <div className="my-wave"></div> */}
      {/* <HireMe /> */}
      {/* </div> */}
    </div>
  );
}
