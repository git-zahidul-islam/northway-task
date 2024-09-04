import  { useState } from 'react';
import { RiArrowDownWideFill } from 'react-icons/ri';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white md:p-0 p-4 flex items-center justify-between flex-wrap">
      {/* logo for mobile */}
      <div className="md:hidden block">
        <a className='' href="/">
        <img src="https://i.postimg.cc/Ls6Vdr9d/Logo.png" alt="logo" />
        </a>
      </div>

      {/* this is Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* this is Desktop and tablet Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:flex justify-between items-center md:space-x-4 py-6`}
      >

        <div className="text-xl font-bold md:block hidden">
          <a href="/">
            <img src="https://i.postimg.cc/Ls6Vdr9d/Logo.png" alt="logo" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 text-[#1E1E1ECC] font-bold text-lg">
          <a href='#' className="block mt-2 md:mt-0">
            Home
          </a>
          <a href='#' className="block mt-2 md:mt-0">
            About Us
          </a>
          <a href='#' className="text-[#F6941E]  mt-2 md:mt-0 flex items-center gap-2">
            Study Destination <RiArrowDownWideFill/>
          </a>
          <a href="#contact" className=" mt-2 md:mt-0 flex items-center gap-2">
            Gallery <RiArrowDownWideFill/>
          </a>
          <a href="#contact" className="block mt-2 md:mt-0">
            Blog
          </a>
          <a href="#contact" className="block mt-2 md:mt-0">
            Contact Us
          </a>
        </div>

      {/* menu Button */}
        <div className="mt-2 md:mt-0">
          <button className="bg-white border border-[#F6941E] text-[#F6941E] md:px-[20px] px-[16px] md:py-[10px] py-[8px] text-lg font-bold w-full md:w-auto">
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
