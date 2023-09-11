/** @format */
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      data-section
      className="pt-16 md:pt-24 pb-16 dark:bg-primaryDarkColor"
      id="Contact"
    >
      <h2 className="font-[700] text-[36px] text-headingColor dark:text-headingDarkColor text-center mb-2">
        Contact Me
      </h2>
      <p className="text-[14px] text-smallTextColor dark:text-smallTextDarkColor text-center mb-16">
        Get in Touch
      </p>
      <div className="container  grid grid-cols-1 gap-12 md:gap-2 md:grid-cols-[3fr,5fr] justify-center">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2">
            <i className="uil uil-phone text-primaryColor text-[36px]"></i>

            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-headingColor dark:text-headingDarkColor font-[500]">
                Call Me
              </h3>
              <span className="text-[16px] text-smallTextColor dark:text-smallTextDarkColor">
                0888-804-085
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <i className="uil uil-envelope text-primaryColor text-[36px]"></i>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-headingColor dark:text-headingDarkColor font-[500]">
                Email
              </h3>
              <span className="text-[16px] text-smallTextColor dark:text-smallTextDarkColor">
                ducnguyen150120035555@email.com
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <i className="uil uil-map-marker text-primaryColor text-[36px]"></i>

            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-headingColor dark:text-headingDarkColor font-[500]">
                Location
              </h3>
              <span className="text-[16px] text-smallTextColor dark:text-smallTextDarkColor">
                Ha Noi
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          target="_blank"
          action="https://formsubmit.co/ffa86db25d79b5eeec310a1416f395c9"
          method="POST"
          className="grid"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <div className="flex flex-col gap-2 p-4 bg-inputColor dark:bg-inputDarkColor rounded-xl">
                <label
                  htmlFor="name"
                  className="text-[14px] text-headingColor dark:text-headingDarkColor"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="bg-transparent  border-none outline-none text-smallTextColor dark:text-headingDarkColor"
                  {...register("name", { required: true, maxLength: 100 })}
                />
              </div>
              {errors.name && (
                <p className="text-[12px] text-red-500 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char"}
                </p>
              )}
            </div>
            <div>
              <div className="flex flex-col gap-2 p-4 bg-inputColor dark:bg-inputDarkColor rounded-lg">
                <label
                  htmlFor="email"
                  className="text-[14px] text-headingColor dark:text-headingDarkColor"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="bg-transparent border-none outline-none text-smallTextColor  dark:text-smallTextDarkColor"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-[12px] text-red-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="p-4 flex flex-col gap-4 bg-inputColor dark:bg-inputDarkColor dark:text-headingDarkColor rounded-xl mt-6">
              <label htmlFor="message" className="text-[14px]">
                Message
              </label>
              <textarea
                cols={0}
                rows={7}
                className="bg-transparent outline-none border-none"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-[12px] text-red-500 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char"}
              </p>
            )}
          </div>

          <div className="mt-8">
            <button className="px-4 py-5 rounded-lg text-white font-[500] inline-flex bg-primaryColor">
              Send Message
              <i className="ml-3  uil uil-message text-[16px] text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
