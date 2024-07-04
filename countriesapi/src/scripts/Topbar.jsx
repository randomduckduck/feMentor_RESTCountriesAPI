import React from "react";

export default function Topbar() {
  let colorMode = "light";
  function lightMode() {
    document.body.style.setProperty(
      "--plpBackground",
      "var(--lightModeBackground)"
    );
    document.body.style.setProperty("--textColor", " var(--lightModeDarkText");
    document.body.style.setProperty(
      "--elementsColor",
      "var(--darkModeLightText)"
    );
  }
  function darkMode() {
    document.body.style.setProperty(
      "--plpBackground",
      "var(--darkModeBackground)"
    );
    document.body.style.setProperty("--textColor", " var(--darkModeLightText");
    document.body.style.setProperty(
      "--elementsColor",
      "var(--darkModeElements)"
    );
  }
  function handleClick() {
    if (colorMode == "light") {
      darkMode();
      colorMode = "dark";
    } else {
      lightMode();
      colorMode = "light";
    }
  }
  return (
    <div className="topBarHolder">
      <div className="topbarTitle">Where in the world?</div>
      <div className="topBarColorToggle" onClick={handleClick}>
        Dark Mode
      </div>
    </div>
  );
}
