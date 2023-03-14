import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <ScrollToTop
        top="200"
        smooth
        height="20"
        width="20"
        color="white"
        style={{ borderRadius: "90px ", backgroundColor: "#38004c" }}
      />
    </>
  );
};

export default App;
