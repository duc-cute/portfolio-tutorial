/** @format */
import { BsMoonStars } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import imgLogo from "../../assets/images/logo1.png";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import useLocalStorage from "../../hooks/useLocalStorage";

const Header = () => {
  const icons: string[] = [
    "uil uil-estate",
    "uil uil-user",
    "uil uil-file-alt",
    "uil uil-image",
    "uil uil-message",
  ];
  const listMenu: string[] = ["Home", "About", "Skill", "Project", "Contact"];
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const sections = useRef<HTMLDivElement[]>([]);
  const htmlRef = useRef<HTMLElement>(document.documentElement);
  const { darkMode, setDarkMode } = useLocalStorage();

  const handleDarkMode = () => {
    const htmlElement = htmlRef.current;
    setDarkMode(!darkMode);
    htmlElement.setAttribute("data-mode", `${darkMode ? "dark" : "light"}`);
  };

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll("[data-section]");
    sections.current = Array.from(sectionElements) as HTMLDivElement[];
    const pageYOffSet = window.pageYOffset;

    if (sections && sections.current) {
      sections.current.forEach((section) => {
        const sectionOffSetTop = section.offsetTop - 50;
        const sectionOffSetHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        if (pageYOffSet == 0) {
          setActiveMenu("Home");
        }
        if (
          pageYOffSet > sectionOffSetTop &&
          pageYOffSet <= sectionOffSetTop + sectionOffSetHeight &&
          sectionId
        ) {
          setActiveMenu(sectionId);
        }
      });
    }
  };

  const stickyHeaderFuc = () => {
    if (window.scrollY >= 80) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  };
  const handleScrollDebounced = _.debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFuc);
    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", stickyHeaderFuc);
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [scrollPosition, activeMenu]);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveMenu(tab);

      const section = document.querySelector(`${hash}`);

      setTimeout(() => {
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 1000);
    }
  }, []);

  const handleActiveMenu = (item: string) => {
    setActiveMenu(item);
  };

  return (
    <header
      className={`dark:bg-primaryDarkColor ${
        scrollPosition ? "sticky__header" : ""
      } z-20`}
    >
      <nav className="flex justify-between items-center container !max-w-[1170px] font-[Poppins] h-headerHeight">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="h-headerHeight hidden md:block">
            <img className="w-full h-full" src={imgLogo} />
          </div>
          <div className="flex items-center justify-center md:hidden p-3 w-[42px] h-[42px] bg-primaryColor text-[18px]  rounded-[50%] font-[600] text-white">
            <span className="">Đ</span>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[16px] text-headingColor dark:text-headingDarkColor">
              DucCute
            </h2>
            <p className="text-[12px] text-smallTextColor dark:text-smallTextDarkColor">
              personal
            </p>
          </div>
        </div>

        {/* menu */}
        <div
          className={`${
            showMenuMobile ? "flex" : ""
          }hidden md:flex gap-6 md:items-center md:justify-end md:relative md:bg-transparent   fixed w-full h-full top-0 left-0  bg-[#00000084] z-[1000] `}
          onClick={() => setShowMenuMobile(false)}
        >
          <ul className="absolute  top-0 right-0 bg-primaryBg w-[50%] h-full flex flex-col justify-center items-start px-5 ml-5   gap-10 md:relative md:bg-transparent md:flex-row md:items-center">
            {listMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex gap-3 items-center  text-headingColor text-[14px] font-[500] dark:text-headingDarkColor"
                  onClick={() => handleActiveMenu(item)}
                >
                  <i
                    className={`${icons[index]} text-headingColor md:hidden text-[18px]`}
                  ></i>
                  <a
                    className={`${
                      item === activeMenu ? "!text-primaryColor" : ""
                    }
                  hover:!text-primaryColor text-headingColor md:text-headingColor md:dark:text-headingDarkColor text-[16px] md:text-[14px]`}
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:block" onClick={handleDarkMode}>
            {darkMode ? (
              <span className="text-headingColor text-[18px] hover:text-primaryColor">
                <BsMoonStars />
              </span>
            ) : (
              <span className="text-white text-[18px] hover:text-primaryColor">
                <FiSun />
              </span>
            )}
          </div>
        </div>

        {!showMenuMobile && (
          <span
            className="md:hidden text-[24px] dark:text-headingDarkColor"
            onClick={() => setShowMenuMobile(!showMenuMobile)}
          >
            <AiOutlineMenu />
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
