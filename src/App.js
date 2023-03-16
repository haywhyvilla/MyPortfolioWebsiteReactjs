import React, { useState, createContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileVeiw from "./Components/Sidebar/NavbarMobileVeiw";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <NavbarMobileVeiw />
        <Sidebar />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>

      <ScrollToTop
        top="200"
        smooth
        height="20"
        width="20"
        color="white"
        style={{ borderRadius: "90px ", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
