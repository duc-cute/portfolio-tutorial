/** @format */
import { BsMoonStars } from "react-icons/bs";
import imgLogo from "../../assets/images/logo1.png";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
const Header = () => {
  const listMenu: string[] = ["Home", "About", "Skill", "Project", "Contact"];
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");
  const sections = useRef<HTMLDivElement[]>([]);

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
    console.log("rêpaet");

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
          <div className=" h-headerHeight ">
            <img className="w-full h-full" src={imgLogo} />
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
        <div className="flex gap-8 items-center">
          <ul className="flex gap-6">
            {listMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={` text-headingColor text-[14px] font-[500] dark:text-headingDarkColor hover:!text-primaryColor ${
                    item === activeMenu ? "!text-primaryColor" : ""
                  }`}
                  onClick={() => handleActiveMenu(item)}
                >
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            })}
          </ul>
          <div>
            <BsMoonStars />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
