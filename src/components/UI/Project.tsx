/** @format */
import { useState } from "react";
import Modal from "./Modal";
import { dataProject } from "../../assets/datas/DataProject";
const Project = () => {
  const [nextItems, setNextItems] = useState<number>(6);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<null | number>(null);
  const handleNextMoreProject = () => {
    setNextItems((nextItems) => nextItems + 3);
  };
  const getImgUrl = (name: string): string => {
    return new URL(`${name}`, import.meta.url).href;
  };
  return (
    <section data-section className="pt-24 pb-8" id="Project">
      <h2 className="font-[700] text-[36px] text-headingColor text-center mb-2">
        Project
      </h2>
      <p className="text-[14px] text-smallTextColor text-center mb-16">
        My recent project
      </p>
      <div className="container flex flex-col items-center">
        <div className="grid grid-cols-3 gap-5">
          {dataProject.slice(0, nextItems).map((item, index) => (
            <div
              key={`project-${index}`}
              className="w-full min-h-[200px] object-cover cursor-pointer shadow-custom rounded-xl group relative"
            >
              <img
                src={getImgUrl(item.image)}
                className="w-full h-full rounded-xl"
              />
              <div
                className="w-full h-full absolute hidden group-hover:block   bg-primaryColor bg-opacity-40 left-0 top-0 rounded-xl"
                onClick={() => setActiveId(item.id)}
              >
                <div className="w-full h-full flex items-center justify-center   ">
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-white text-[14px] bg-headingColor hover:bg-smallTextColor px-5 py-4 rounded-xl  "
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {nextItems < dataProject.length && dataProject.length > 6 && (
          <button
            className="px-4 py-3 bg-headingColor hover:bg-smallTextColor rounded-lg text-white text-[16px] mt-8"
            onClick={handleNextMoreProject}
          >
            Load More
          </button>
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
};

export default Project;
