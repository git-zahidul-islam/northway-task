import banner from "../../assets/popularUnivercity/bancground.png";
import img1 from "../../assets/popularUnivercity/icon1.png";
import img2 from "../../assets/popularUnivercity/icon2.png";
import img3 from "../../assets/popularUnivercity/icon3.png";
import { FaArrowRightLong } from "react-icons/fa6";


const PopularUniversity = () => {
  return (
    <div
      className="relative bg-cover bg-center md:my-32 my-16"
      style={{
        width: "100%",
        height: "auto", 
        padding: "50px 15px", 
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="relative z-10  w-full p-4 lg:px-[150px] mx-auto h-auto">
        <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12">
          <span className="text-[#F6941E]">Popular </span>
          Universities
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md  h-[auto]">
            <img
              src={img1}
              alt="University of Connecticut"
              className="h-16 w-16 mx-auto mt-12"
            />
            <p className="text-center font-bold mt-1 px-[2px]">
              University of Connecticut, Connecticut <br />(Public Ivy)
            </p>
          </div>

          <div className="bg-white shadow-md p-5 h-[auto]">
            <img
              src={img2}
              alt="Arizona State University"
              className="h-16 w-16 mx-auto mt-6"
            />
            <p className="text-center font-bold mt-3">
              Arizona State University, Phoenix, <br /> Arizona
            </p>
          </div>

          <div className="bg-white shadow-md p-5 h-[auto]">
            <img
              src={img3}
              alt="University of California, Riverside"
              className="h-16 w-16 mx-auto mt-6"
            />
            <p className="text-center font-bold mt-3">
              University of California, Riverside, <br />California
            </p>
          </div>

          <div className="bg-white shadow-md p-5 h-[auto]">
            <img
              src={img2}
              alt="Arizona State University"
              className="h-16 w-16 mx-auto mt-6"
            />
            <p className="text-center font-bold mt-3">
              Arizona State University, Phoenix, <br /> Arizona
            </p>
          </div>

          <div className="bg-white shadow-md p-5 h-[auto]">
            <img
              src={img3}
              alt="University of California, Riverside"
              className="h-16 w-16 mx-auto mt-6"
            />
            <p className="text-center font-bold mt-3">
              University of California, Riverside, <br />California
            </p>
          </div>

          <div className="bg-white shadow-md  h-[auto]">
            <img
              src={img1}
              alt="University of Connecticut"
              className="h-16 w-16 mx-auto mt-12"
            />
            <p className="text-center font-bold mt-1 px-[2px]">
              University of Connecticut, Connecticut <br />(Public Ivy)
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-10">
        <button className="flex items-center justify-center gap-2 px-6 py-3 w-[163px] h-[50px] border-white border-2 text-white font-semibold hover:bg-white hover:text-black transition-colors">

            View More <span><FaArrowRightLong /></span>
            

          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularUniversity;