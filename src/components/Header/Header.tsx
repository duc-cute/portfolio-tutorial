/** @format */
import { BsMoonStars } from "react-icons/bs";
import imgLogo from "../../assets/images/logo1.png";
const Header = () => {
  const listMenu: string[] = ["Home", "About", "Skill", "Project", "Contact"];
  return (
    <header>
      <nav className="flex justify-between items-center container font-[Poppins] h-headerHeight">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className=" h-headerHeight ">
            <img className="w-full h-full" src={imgLogo} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[16px] text-headingColor ">DucCute</h2>
            <p className="text-[12px] text-smallTextColor">personal</p>
          </div>
        </div>
        {/* menu */}
        <div className="flex gap-8 items-center">
          <ul className="flex gap-6">
            {listMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-headingColor text-[14px] font-[500]"
                >
                  <a href="#home">{item}</a>
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
