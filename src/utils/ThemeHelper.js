import { useEffect, useState } from "react";

const ThemeHelper = () => {
  const [theme, setTheme] = useState();
  const [hue, setHue] = useState(0);
  const [randomColor, setRandomColor] = useState(true);

  useEffect(() => {
    if (!randomColor) return;
    const rgbTimer = setInterval(() => {
      setHue((hue) => {
        if (hue > 340) {
          return 1;
        }
        return hue + 2;
      });
    }, 100); // lower then faster

    return () => clearInterval(rgbTimer);
  }, [randomColor]);

  const saveTheme = (theme) => {
    document.documentElement.setAttribute("color-scheme", theme);
    return window.localStorage.setItem("current-theme", theme);
  };

  useEffect(() => {
    const getSavedTheme =
      window.localStorage.getItem("current-theme") !== "undefined"
        ? window.localStorage.getItem("current-theme")
        : "dark-theme";
    setTheme(getSavedTheme);
    return setTheme("dark-theme");
  }, []);

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  const toggleTheme = () => {
    return setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  return { theme, toggleTheme, hue, setHue, randomColor, setRandomColor };
};

export default ThemeHelper;
