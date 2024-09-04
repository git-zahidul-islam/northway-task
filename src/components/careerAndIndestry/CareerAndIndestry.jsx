import { FaLongArrowAltRight } from "react-icons/fa";

const CareerAndIndustry = () => {
  return (
    <div className="flex items-center md:flex-row flex-col lg:gap-20 md:gap-10 gap-0 md:space-y-0 space-y-5">
      <div className="md:w-6/12 w-full flex flex-col md:px-0 px-2">
        <div className="md:space-y-5 space-y-3 md:mb-5 mb-3">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-2 text-[#1E1E1E]">
            Career <span className="text-[#F6941E]">Industry</span>
          </h2>
          <p className="text-[#1E1E1ECC] text-base font-normal">
            Careers & Industry One of the most technologically powerful and
            dynamic countries, USA is the largest & most dominant economy
            globally. Sectors that empower this world’s most productive economy
            include Healthcare, Technology, Construction, Retail, Manufacturing,
            Finance & Insurance and Real Estate. Top jobs with high remuneration
            prospects for international students include Medicine, Computer &
            Information Systems Managers, Architectural & Engineering Managers
            and Marketing & Financial Managers. Standard of living in the USA is
            among the highest in the world with high per capita income. This
            nation performs very well in many measures of well-being such as
            income & wealth, health status, jobs and earnings, education &
            skills and environmental quality. Read More
          </p>
        </div>

        <div>
        <button className="mt-10 px-4 py-2 text-[#1E1E1ECC] text-lg bg-[#FFFFFF] border border-[#F6941E] flex items-center gap-3">
          See More <FaLongArrowAltRight />
        </button>
        </div>
      </div>

      {/* this is image section */}
      <div className="md:w-6/12 w-full flex justify-center items-center">
        <img
          src="https://i.postimg.cc/zXSW6SQh/careerandindestry.png"
          alt="Why Study Image"
          className="md:h-[447px] md:w-[501px] w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CareerAndIndustry;
