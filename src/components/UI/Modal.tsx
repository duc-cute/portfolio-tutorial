/** @format */
import { dataProject } from "../../assets/datas/DataProject";
interface IPropsModal {
  setShowModal: (value: boolean) => void;
  activeId: null | number;
}
const Modal = ({ setShowModal, activeId }: IPropsModal) => {
  const portfolio = dataProject.find((item) => item.id === activeId);
  const getImgUrl = (name: string | undefined): string => {
    return new URL(`${name}`, import.meta.url).href;
  };
  return (
    <div className="flex items-center justify-center w-full h-full fixed top-0 left-0 z-[50] bg-headingColor  bg-opacity-40">
      <div className="bg-white dark:bg-headingColor max-w-[600px] rounded-2xl p-5 relative">
        <div className="shadow-custom rounded-2xl">
          <figure>
            <img src={getImgUrl(portfolio?.image)} className="rounded-2xl" />
          </figure>
        </div>
        <div className="">
          <h2 className="text-[24px] text-headingColor dark:text-headingDarkColor font-[600] mt-4 mb-6 ">
            {portfolio?.title}
          </h2>
          <p className="text-[14px] text-smallTextColor dark:text-smallTextDarkColor leading-7 font-[Montserrat]">
            {portfolio?.detail.description}
          </p>
          <div className="flex mt-5 items-center gap-2">
            <h3 className="text-[18px] text-headingColor dark:text-headingDarkColor">
              Technologies:
            </h3>
            <ul className="flex gap-3">
              {portfolio?.detail.technology.split(",").map((item, index) => (
                <li
                  key={`tech-${index}`}
                  className="flex items-center text-center p-2 text-[12px] bg-gray-200 rounded-md text-headingColor "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={portfolio?.detail.demo}
            className="p-3 bg-primaryColor text-white font-[500] text-[14px] rounded-lg  gap-2 inline-flex items-center mt-6 mb-8"
            target="_blank"
          >
            Live Sites
          </a>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="absolute w-[1.8rem] h-[1.8rem] bg-primaryColor top-[1.7rem] right-[1.7rem] text-[25px] text-white flex items-center justify-center leading-3 rounded-[4px]"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
