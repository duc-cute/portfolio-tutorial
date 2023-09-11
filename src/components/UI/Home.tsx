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
      className="pt-5 pb-8 md:pt-24 flex flex-col items-center dark:bg-primaryDarkColor"
      id="Home"
    >
      <div className="container gap-6 grid  items-center grid-cols-[max-content,1fr] md:grid-cols-[.25fr,1.15fr,1.15fr,max-content]">
        {/* social */}
        <div className="order-1  flex flex-col gap-8">
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
        <div className="grid grid-cols-1 order-3 mt-3 col-span-2 md:order-2 md:col-span-1">
          <h1
            className="order-1 font-[Parisienne] text-headingColor text-[28px] font-[700] dark:text-headingDarkColor md:text-[40px]"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Hi, I'm Nguyen
          </h1>
          <div
            className="order-2  text-smallTextColor text-[16px] font-[600] mt-4 mb-4 md:mb-6 dark:text-smallTextDarkColor md:text-[20px] md:order-2 "
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
            className="mt-2 order-4  text-smallTextColor text-[16px] leading-6 mb-5 max-w-[340px] dark:text-smallTextDarkColor md:order-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <div className="order-3  flex items-center justify-start md:order-4 md:block">
            <a
              className="p-3 text-[14px]  md:px-5 bg-primaryColor text-white font-[500] rounded-[32px]  gap-2 inline-flex items-center md:mt-4 md:text-[16px] md:py-4"
              href="#"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              DownLoad CV
              <i className="uil uil-message "></i>
            </a>
          </div>
        </div>

        <div
          className="order-2 md:w-[340px] justify-self-center md:order-3"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <svg
            className="w-[220px] md:w-full fill-primaryColor"
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

        <div className="order-4 col-span-2 grid grid-cols-2  items-center gap-8   text-end md:gap-12 md:order-4 md:col-span-1 md:grid-cols-1">
          <div className="flex flex-col gap-2 w-full text-center md:text-end mb-3">
            <h2 className="text-[24px] md:text-[32px] font-[600] text-headingColor dark:text-headingDarkColor">
              <CountUp start={0} end={6} duration={2} suffix="+" />
            </h2>
            <h3 className="text-[14px] md:text-[18px] font-[500] text-headingColor dark:text-headingDarkColor">
              Months of Experience
            </h3>
          </div>

          <div className="flex flex-col gap-2 w-full text-center md:text-end mb-3">
            <h2 className="text-[24px] md:text-[32px] font-[600] text-headingColor dark:text-headingDarkColor">
              <CountUp start={0} end={600} duration={2} suffix="+" />
            </h2>
            <h3 className="text-[14px] md:text-[18px] font-[500] text-headingColor dark:text-headingDarkColor">
              Level English
            </h3>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-end w-full">
            <h2 className="text-[24px] md:text-[32px] font-[600] text-headingColor dark:text-headingDarkColor">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </h2>
            <h3 className="text-[14px] md:text-[18px] font-[500] text-headingColor dark:text-headingDarkColor">
              Success Rate
            </h3>
          </div>
          <div className="flex flex-col gap-2 w-full text-center md:text-end">
            <h2 className="text-[24px] md:text-[32px] font-[600] text-headingColor dark:text-headingDarkColor">
              <CountUp start={0} end={12} duration={2} suffix="+" />
            </h2>
            <h3 className="text-[14px] md:text-[18px] font-[500] text-headingColor dark:text-headingDarkColor">
              Project Completed
            </h3>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="hidden md:block text-[28px] text-primaryColor animate-bounce mt-14 "
        onClick={handleScrollToAbout}
      >
        <HiChevronDoubleDown />
      </a>
    </section>
  );
};

export default Home;
