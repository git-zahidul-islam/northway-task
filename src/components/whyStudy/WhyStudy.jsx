import { FaLongArrowAltRight, FaStar } from "react-icons/fa";

const WhyStudy = () => {
  return (
    <div className="flex items-center md:flex-row flex-col lg:gap-20 md:gap-10 gap-0 md:space-y-0 space-y-5">
      {/* Left Div: Image */}
      <div className="md:w-6/12 w-full flex justify-center items-center">
        <img
          src="https://i.postimg.cc/vBNB82pS/whyStudt.png" // Replace with your image path
          alt="Why Study Image"
          className="md:h-[447px] md:w-[501px] w-full h-full object-cover"
        />
      </div>

      {/* Right Div: Content */}
      <div className="md:w-6/12 w-full flex flex-col md:px-0 px-5">
        {/* First Section: Title with Description */}
        <div className="md:space-y-5 space-y-3 md:mb-5 mb-3">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-2 text-[#1E1E1E]">Why Study? <span className="text-[#F6941E]">In USA</span></h2>
          <p className="text-gray-600">
            Studying opens doors to new opportunities, enhances knowledge, and
            paves the way for a brighter future.
          </p>
        </div>

        {/* Second Section: Quick Facts */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-[#1E1E1E]">Quick Facts</h3>
          <ul className="list-none space-y-3">
            <li className="flex gap-1 items-center"><FaStar/> USA hosts more than a million international students</li>
            <li className="flex gap-1 items-center"><FaStar/> Over 25% of world’s top 100 universities are in the USA</li>
            <li className="flex gap-1 items-center"><FaStar/>Post-study stay back visas (OPT) up to 3 years for STEM programs</li>
            <li className="flex gap-1 items-center"><FaStar/>Internships (CPT) up to 12 months while studying</li>
            <li className="flex gap-1 items-center"><FaStar/>Merit Based & Need Based Scholarships</li>
          </ul>
        </div>

        {/* Third Section: See More Button */}
        <div className="mt-10">
          <button className="px-4 py-2 text-white text-lg bg-[#F6941E] flex items-center gap-3">
            See More <FaLongArrowAltRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
