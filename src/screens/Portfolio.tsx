/** @format */

// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/UI/About";
import Contact from "../components/UI/Contact";
import Skill from "../components/UI/Skill";

import Home from "../components/UI/Home";
import Project from "../components/UI/Project";
import Footer from "../components/Footer/Footer";
import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Portfolio = () => {
  const currentMode = JSON.parse(localStorage.getItem("data-mode") || "false");
  const [darkMode, setDarkMode] = useState<boolean>(currentMode);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    color: "#36d7b7",
    borderColor: "#36d7b7 #36d7b7 transparent",
  };
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0  bg-primaryBg z-[1000] flex items-center">
          <ClipLoader
            color="#36d7b7"
            loading={isLoading}
            cssOverride={override}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
