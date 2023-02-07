import "./Menu.css";
import { useState, useRef } from "react";
import {
  ColorLens,
  DarkMode,
  LightMode,
  Menu as BurgerMenu,
  KeyboardArrowDown,
  Close
} from "@mui/icons-material";
import ThemeHelper from "../../utils/ThemeHelper";
import ColorPicker, { ColorRange, MyCheckBox } from "../ColorPicker/ColorPicker";
import UseOnClickOutside from "../../hooks/UseOnClickOutside";

const Menu = ({ children }) => {
  const {
    hue,
    setHue,
    theme,
    toggleTheme,
    randomColor,
    setRandomColor
  } = ThemeHelper();
  const [showColor, setShowColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSideColor, setShowSideColor] = useState(false);
  const colorIcon = useRef(null);
  const colorPickerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleShowColorPicker = () => {
    setShowColor((show) => !show);
  };

  const dismissColorPicker = () => {
    return setShowColor(false);
  };

  const toggleMenu = () => {
    return setShowMenu((prev) => !prev);
  };

  const dismissMenu = () => {
    return setShowMenu(false);
  };

  const toggleSideColor = () => {
    return setShowSideColor((prev) => !prev);
  };

  UseOnClickOutside(colorPickerRef, dismissColorPicker, colorIcon);
  UseOnClickOutside(menuRef, dismissMenu);

  return (
    <div className="menu-container">
      <div className="nav">
        <div className="logo">
          <a href="#home-page">
            <span>&#123;&nbsp;</span>
            cshong
            <span>&nbsp;&#125;</span>
          </a>
        </div>
        <ul className="nav-items active">
          <li className="nav-link">
            <a href="#home-page">home</a>
          </li>
          {/* <li className="nav-link">
            <a href="#experience-page">experience</a>
          </li> */}
          <li className="nav-link">
            <a href="#skills-page">skills</a>
          </li>
          <li className="nav-link">
            <a href="#about-page">about</a>
          </li>
        </ul>
        <div className="settings active">
          <div>
            <ColorLens
              className="setting-icon"
              ref={colorIcon}
              onClick={toggleShowColorPicker}
            />
          </div>
          <div>
            {theme === "light-theme" ? (
              <DarkMode className="setting-icon" onClick={toggleTheme} />
            ) : (
              <LightMode className="setting-icon" onClick={toggleTheme} />
            )}
          </div>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <BurgerMenu className="setting-icon" />
        </div>
      </div>

      <div className={`side-menu  ${showMenu ? "active" : ""}`} ref={menuRef}>
        <div className="side-menu-close-wrapper">
          <Close className="side-menu-close" onClick={dismissMenu} />
        </div>
        <a href="#home-page">home</a>
        {/* <li className="nav-link">
            <a href="#experience-page">experience</a>
          </li> */}
        <a href="#skills-page">skills</a>
        <a href="#about-page">about</a>
        <div className="side-menu-settings">
          <div className="side-menu-color-picker" onClick={toggleSideColor}>
            <ColorLens className="setting-icon" />
            Pick a color
            <KeyboardArrowDown
              className={`color-picker-arrow ${showSideColor ? "active" : ""}`}
            />
          </div>
          <div
            className={`side-menu-pick-color ${showSideColor ? "active" : ""}`}
          >
            <MyCheckBox
              setHue={setHue}
              randomColor={randomColor}
              setRandomColor={setRandomColor}
            />
            <ColorRange hue={hue} setHue={setHue} />
          </div>
          <div className="side-menu-theme-changer" onClick={toggleTheme}>
            {theme === "light-theme" ? (
              <DarkMode className="setting-icon" />
            ) : (
              <LightMode className="setting-icon" />
            )}
            {theme === "light-theme" ? "dark theme" : "light theme"}
          </div>
        </div>
      </div>
      <ColorPicker
        hue={hue}
        setHue={setHue}
        randomColor={randomColor}
        setRandomColor={setRandomColor}
        show={showColor}
        innerRef={colorPickerRef}
        dismissColorPicker={dismissColorPicker}
      />
      <div className="children-container">
        {children.map((child, index) => {
          return (
            <div className="child-page" key={`child-page-${index}`}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
