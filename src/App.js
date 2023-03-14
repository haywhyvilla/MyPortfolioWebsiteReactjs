import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
