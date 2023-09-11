/** @format */
import { FiDribbble, FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import imgLogo from "../../assets/images/logo1.png";
const Footer = () => {
  const listMenu: string[] = ["Home", "About", "Skill", "Project", "Contact"];

  return (
    <div className="flex flex-col items-center dark:bg-[#100e1b] pt-12 pb-6 bg-primaryColor bg-opacity-10">
      <nav className="flex flex-col gap-12 justify-start md:flex-row md:justify-between md:items-center container font-[Poppins] pb-8">
        <div className="flex items-center gap-3">
          <a href="#Home" className="max-w-[160px] md:max-w-[200px]">
            <img className="w-full" src={imgLogo} />
          </a>
          <div className="flex flex-col gap-1">
            <h2 className="text-[16px] text-headingColor dark:text-headingDarkColor">
              DucCute
            </h2>
            <p className="text-[12px] text-smallTextColor dark:text-smallTextDarkColor">
              personal
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <ul className="flex flex-col md:flex-row gap-6">
            {listMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-headingColor dark:text-headingDarkColor text-[20px] font-[500] md:text-[14px]"
                >
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex  gap-8">
          <a
            className="text-white p-3 rounded-[50%] bg-primaryColor text-[16px]"
            href="https://github.com/duc-cute"
          >
            <FiLinkedin />
          </a>
          <a
            className="text-white p-3 rounded-[50%] bg-primaryColor text-[16px]"
            href="https://github.com/duc-cute"
          >
            <FiDribbble />
          </a>
          <a
            className="text-white p-3 rounded-[50%] bg-primaryColor text-[16px]"
            href="https://github.com/duc-cute"
          >
            <FiGithub />
          </a>
          <a
            className="text-white p-3 rounded-[50%] bg-primaryColor text-[16px]"
            href="https://github.com/duc-cute"
          >
            <FiFacebook />
          </a>
        </div>
      </nav>
      <div className=" container h-[2px] bg-headingColor dark:bg-headingDarkColor w-[100%] !ml-[20px]  !mr-[20px]"></div>
      <div className="font-[Parisienne] text-[16px] mt-8 dark:text-smallTextDarkColor">
        Developed by Nguyen Duc&copy; 2023 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
