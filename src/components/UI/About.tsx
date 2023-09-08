/** @format */
import imgInner from "../../assets/images/img.jpg";
import imgLayer from "../../assets/images/550x640.jpg";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Parallax from "parallax-js";
const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
      });

      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }
  }, []);
  return (
    <section
      data-section
      className="pt-24 pb-8 dark:bg-primaryDarkColor"
      id="About"
    >
      <h2 className="font-[700] text-[36px] text-headingColor text-center mb-2 dark:text-headingDarkColor">
        About Me
      </h2>
      <p className="text-[14px] text-smallTextColor text-center mb-16 dark:text-smallTextDarkColor">
        My introduction
      </p>
      <div className="container flex  ">
        <div className="w-[35%] h-auto">
          <div
            className="about_image_wrap parallax relative"
            data-relative-input="true"
            ref={sceneEl}
          >
            <div className="image layer absolute z-10" data-depth="0.1">
              <img className="opacity-0" src={imgLayer} alt="550x640" />
              <div
                className="inner absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("${imgInner}")` }}
                data-img-url={imgInner}
              ></div>
            </div>
            <div className="border layer" data-depth="0.2">
              <img className="opacity-0" src={imgLayer} alt="550x640" />
              <div className="inner absolute top-[25px] bottom-[-25px] left-[25px] right-[-25px] border-[10px] border-solid border-[#041230] dark:border-headingDarkColor"></div>
            </div>
          </div>
        </div>
        <div className="w-[65%] pl-20">
          <h3 className="text-headingColor text-[24px] mb-4 dark:text-headingDarkColor">
            I'm Nguyen Duc and &nbsp;
            <TypeAnimation
              sequence={["Web Developer", 2000, "Student", 2000]}
              wrapper="span"
              speed={50}
              style={{ color: "#fe7560", fontWeight: "500" }}
              repeat={Infinity}
            />
          </h3>
          <div className="text-[14px] text-smallTextColor leading-6 dark:text-smallTextDarkColor">
            <p>
              Hi, my name is
              <strong className="text-primaryColor font-[500]">
                Nguyen Duc
              </strong>
              . I am a web developer . I am looking for an internship as a Web
              developer. I have worked on several projects and have some
              technical skills needed to apply for this position
              <br />I am currently studying in the 3rd year of East Asia
              University of Technology.
            </p>
          </div>
          <div className="mt-6 mb-10">
            <ul className="grid grid-cols-2 gap-5">
              <li className="flex items-center">
                <span className="flex gap-4 items-center text-smallTextColor dark:text-smallTextDarkColor">
                  <label className="font-[700] text-[14px] text-headingColor min-w-[85px] inline-flex items-center dark:text-headingDarkColor">
                    Birthday:
                  </label>
                  15.01.2003
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex gap-4 items-center text-smallTextColor dark:text-smallTextDarkColor">
                  <label className="font-[700] text-[14px] text-headingColor min-w-[85px] inline-flex items-center dark:text-headingDarkColor">
                    Study:
                  </label>
                  East Asia University of Technology
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex gap-4 items-center text-smallTextColor dark:text-smallTextDarkColor">
                  <label className="font-[700] text-[14px] text-headingColor min-w-[85px] inline-flex items-center dark:text-headingDarkColor">
                    Degree:
                  </label>
                  Intern
                </span>
              </li>

              <li className="flex items-center">
                <span className="flex gap-4 items-center">
                  <label className="font-[700] text-[14px] min-w-[85px] inline-flex items-center dark:text-headingDarkColor">
                    Mail:
                  </label>
                  <a
                    className="text-smallTextColor dark:text-smallTextDarkColor"
                    href="mailto:ducnguyen150120035555@gmail.com"
                  >
                    ducnguyen1501&#64;gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex gap-4 items-center">
                  <label className="font-[700] text-[14px] min-w-[85px] inline-flex items-center dark:text-headingDarkColor">
                    Phone:
                  </label>
                  <a
                    className="text-smallTextColor dark:text-smallTextDarkColor"
                    href="#"
                  >
                    0888804085
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex gap-4 items-center">
                  <label className="font-[700] text-[14px] min-w-[85px] inline-flex items-center dark:text-headingDarkColor">
                    Github:
                  </label>
                  <a
                    className="text-smallTextColor dark:text-smallTextDarkColor"
                    href="https://github.com/duc-cute"
                  >
                    https://github.com/duc-cute
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div
            className="pt-4 pb-4 pl-6 pr-6 bg-primaryColor text-white font-[500]  gap-2 inline-flex items-center "
            data-aos="fade-up-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <ul>
              <li>
                <a href="#" download>
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
