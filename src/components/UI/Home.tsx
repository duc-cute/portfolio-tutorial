/** @format */
// import imgPort from "../../assets/images/perfil.png";
import imgPort from "../../assets/images/img.png";
import { FiDribbble, FiGithub, FiLinkedin } from "react-icons/fi";
import { HiChevronDoubleDown } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="pt-24 pb-8 flex flex-col items-center" id="Home">
      <div className="container grid items-center grid-cols-[.25fr,1.15fr,1.15fr,max-content]">
        {/* social */}
        <div className="flex flex-col gap-8">
          <a
            className="text-primaryColor text-[20px]"
            href="https://github.com/duc-cute"
          >
            <FiLinkedin />
          </a>
          <a
            className="text-primaryColor text-[20px]"
            href="https://github.com/duc-cute"
          >
            <FiDribbble />
          </a>
          <a
            className="text-primaryColor text-[20px]"
            href="https://github.com/duc-cute"
          >
            <FiGithub />
          </a>
        </div>

        {/* introduce */}
        <div className="">
          <h1 className="text-headingColor text-[40px] font-[700]">
            Hi, I'm Nguyen Duc
          </h1>
          <div className="text-smallTextColor text-[20px] font-[600] mt-4 mb-6">
            I'm &nbsp;
            <TypeAnimation
              sequence={["Web Developer", 2000, "Student", 2000]}
              wrapper="span"
              speed={50}
              style={{ color: "#fe7560" }}
              repeat={Infinity}
            />
          </div>
          <p className="text-smallTextColor text-[16px] leading-6 mb-5 max-w-[340px]">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <a
            className="pt-4 pb-4 pl-5 pr-5 bg-primaryColor text-white font-[500] rounded-[32px]  gap-2 inline-flex items-center mt-4"
            href="#"
          >
            DownLoad CV
            <i className="uil uil-message "></i>
          </a>
        </div>

        {/* image */}
        <div className="w-[340px] justify-self-center">
          <svg
            className="fill-primaryColor"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image className="w-[170px]" x="4" y="14" href={imgPort} />
            </g>
          </svg>
          <div />
        </div>

        <div className="flex flex-col items-center gap-12 text-end">
          <div className="flex flex-col gap-2 w-full text-end">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <span>1+</span>
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Years of Experience
            </h3>
          </div>

          <div className="flex flex-col gap-2 w-full text-end">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <span>600+</span>
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Level English
            </h3>
          </div>
          <div className="flex flex-col gap-2 text-end w-full">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <span>100%</span>
            </h2>
            <h3 className="text-[18px] font-[500] text-headingColor">
              Success Rate
            </h3>
          </div>
          <div className="flex flex-col gap-2 w-full text-end">
            <h2 className="text-[32px] font-[600] text-headingColor ">
              <span>12+</span>
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
      >
        <HiChevronDoubleDown />
      </a>
    </section>
  );
};

export default Home;
