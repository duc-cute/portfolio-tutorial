/** @format */

import { useEffect } from "react";
import Portfolio from "./screens/Portfolio";
import Aos from "aos";
import "aos/dist/aos.css";

/** @format */
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Portfolio />
    </>
  );
}

export default App;
