/** @format */
// import imgPort from "../../assets/images/perfil.png";
import CountUp from "react-countup";
import imgPort from "../../assets/images/img.png";

import { FiDribbble, FiGithub, FiLinkedin } from "react-icons/fi";
import { HiChevronDoubleDown } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const handleScrollToAbout = () => {
    const section = document.querySelector("#About");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      data-section
      className="pt-24 pb-8 flex flex-col items-center"
      id="Home"
    >
      <div className="container grid items-center grid-cols-[.25fr,1.15fr,1.15fr,max-content]">
        {/* social */}
        <div className="flex flex-col gap-8">
          <a
            className="text-primaryColor text-[20px]"
            href="https://github.com/duc-cute"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <FiLinkedin />
          </a>
          <a
            className="text-primaryColor text-[20px]"
            href="https://github.com/duc-cute"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FiDribbble />
          </a>
          <a
            className="text-primaryColor text-[20px]"
            href="https://github.com/duc-cute"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <FiGithub />
          </a>
        </div>

        {/* introduce */}
        <div className="">
          <h1
            className="font-[Parisienne] text-headingColor text-[40px] font-[700]"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Hi, I'm Nguyen
          </h1>
          <div
            className="text-smallTextColor text-[20px] font-[600] mt-4 mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            I'm &nbsp;
            <TypeAnimation
              sequence={["Web Developer", 2000, "Student", 2000]}
              wrapper="span"
              speed={50}
              style={{ color: "#fe7560" }}
              repeat={Infinity}
            />
          </div>
          <p
            className="text-smallTextColor text-[16px] leading-6 mb-5 max-w-[340px]"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <a
            className="pt-4 pb-4 pl-5 pr-5 bg-primaryColor text-white font-[500] rounded-[32px]  gap-2 inline-flex items-center mt-4"
            href="#"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            DownLoad CV
            <i className="uil uil-message "></i>
          </a>
        </div>

        <div
          className="w-[340px] justify-self-center"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <svg
            className="fill-primaryColor"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />

              <image
                className="w-[360px] h-[360] object-cover"
                x="50"
                y="60"
                href={imgPort}
              />
            </g>
          </svg>
          <div />
        </div>

        <div className="flex flex-col items-center gap-12 text-end">
          <div className="flex flex-col gap-2 w-full text-end">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <CountUp start={0} end={6} duration={2} suffix="+" />
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Months of Experience
            </h3>
          </div>

          <div className="flex flex-col gap-2 w-full text-end">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <CountUp start={0} end={600} duration={2} suffix="+" />
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Level English
            </h3>
          </div>
          <div className="flex flex-col gap-2 text-end w-full">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Success Rate
            </h3>
          </div>
          <div className="flex flex-col gap-2 w-full text-end">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <CountUp start={0} end={12} duration={2} suffix="+" />
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Project Completed
            </h3>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="text-[28px] text-primaryColor animate-bounce mt-14 "
        onClick={handleScrollToAbout}
      >
        <HiChevronDoubleDown />
      </a>
    </section>
  );
};

export default Home;
