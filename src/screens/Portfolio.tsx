/** @format */

// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/UI/About";
// import Contact from "../components/UI/Contact";
import Skill from "../components/UI/Skill";

import Home from "../components/UI/Home";
import Project from "../components/UI/Project";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
        {/*<Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Portfolio;
