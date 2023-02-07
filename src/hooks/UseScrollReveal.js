import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

class Direction {
  static top = "top";
  static bottom = "bottom";
  static left = "left";
  static right = "right";
}

const UseScrollReveal = ({
  classNames,
  direction = Direction.bottom,
  delay = 400,
  reset = true
}) => {
  const scrollReveal = ScrollReveal({
    reset: reset,
    distance: "60px",
    duration: 500
  });

  useEffect(() => {
    classNames.forEach((className) => {
      scrollReveal.reveal(`.${className}`, {
        origin: direction,
        delay: delay
      });
    });

    return () => scrollReveal.destroy();
  }, []);

  return scrollReveal;
};

export default UseScrollReveal;
export { Direction };
