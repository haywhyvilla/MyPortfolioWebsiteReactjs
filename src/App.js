import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
    </>
  );
};

export default App;
