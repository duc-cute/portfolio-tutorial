/** @format */
import { BsFillPatchCheckFill } from "react-icons/bs";
/** @format */
interface ISkill {
  position: string;
  technology: {
    title: string;
    quality: string;
  }[];
}
const Skill = () => {
  const skill: ISkill[] = [
    {
      position: "Frontend Development",
      technology: [
        {
          title: "HTML ",
          quality: "Intermediate",
        },
        {
          title: "CSS ",
          quality: "Intermediate",
        },
        {
          title: "Javascript ",
          quality: "Intermediate",
        },
        {
          title: "ReactJS ",
          quality: "Intermediate",
        },
        {
          title: "Boostrap ",
          quality: "Basic",
        },
        {
          title: "Tailwind ",
          quality: "Basic",
        },
        {
          title: "Ant Design ",
          quality: "Intermediate",
        },
      ],
    },
    {
      position: "Backend Development",
      technology: [
        {
          title: "NodeJS ",
          quality: "Basic",
        },
        {
          title: "My SQL ",
          quality: "Basic",
        },
        {
          title: "MongoDB ",
          quality: "Basic",
        },
        {
          title: "ExpressJS ",
          quality: "Basic",
        },
        {
          title: "NestJS ",
          quality: "Basic",
        },

        {
          title: "Firebase",
          quality: "Basic",
        },
      ],
    },
  ];

  return (
    <section className="pt-24 pb-8" id="skill">
      <h2 className="font-[700] text-[36px] text-headingColor text-center mb-2">
        Skill
      </h2>
      <p className="text-[14px] text-smallTextColor text-center mb-16">
        My technical level
      </p>
      <div className="container grid grid-cols-2">
        {skill.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-3xl border-solid border border-primaryColor w-[90%] mx-auto"
          >
            <div className=" pr-6 ">
              <h2 className="text-[18px] text-smallTextColor font-[600] text-center  mb-8">
                {item.position}
              </h2>
              <div className="grid grid-cols-2 gap-y-8 gap-x-14">
                {item.technology.map((skill, index) => (
                  <div
                    key={`skill-${index}`}
                    className="flex gap-2  text-left justify-end "
                  >
                    <div className="flex gap-2 w-[80%]">
                      <span className="text-primaryColor">
                        <BsFillPatchCheckFill />
                      </span>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[20px] font-[600] text-headingColor leading-4">
                          {skill.title}
                        </h3>
                        <span className="text-[12px] font-[500] text-smallTextColor">
                          {skill.quality}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
