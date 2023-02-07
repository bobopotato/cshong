import { useEffect } from "react";

const UseOnClickOutside = (ref, onClickOutside, exceptionRef) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        exceptionRef &&
        exceptionRef.current &&
        exceptionRef.current.contains(event.target)
      ) {
        console.log(`excepting`);
        return;
      }
      if (ref && ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        return onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default UseOnClickOutside;
