import { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '/Logo.png'
import { FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-2 lg:text-lg md:text-base text-base font-bold">
                <a
                  href="#"
                  className="px-2 py-2 rounded-md "
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-2 py-2 rounded-md "
                >
                  About Us 
                </a>
                <a
                  href="#" 
                  className="px-2 py-2 rounded-md text-[#F6941E] flex items-center gap-2"
                >
                  Study Destination <FaChevronDown/>
                </a>
                <a
                  href="#"
                  className="px-2 py-2 rounded-md flex items-center gap-2"
                >
                  Gallery <FaChevronDown/>
                 
                </a>
                <a
                  href="#"
                  className="px-2 py-2 rounded-md "
                >
                  Blogs 
                </a> 
                <a
                  href="#"
                  className="px-2 py-2 rounded-md "
                >
                  Contact Us 
                </a>
              </div>
            </div>

            <div className="lg:block md:hidden hidden">
              <button className="text-[#F6941E] border border-[#F6941E] px-4 py-2 flex items-center gap-4">Enquire Now <FaLongArrowAltRight/> </button>
            </div>
          </div>

          {/* Logo Section */}

          {/* Menu Section for Large Screens */}

          {/* Hamburger Menu for Medium and Small Screens */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 text-black "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Medium and Small Screens */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="   block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="   block px-3 py-2 rounded-md text-base font-medium"
              >
                About US
              </a>
              <a
                href="#"
                className="   block px-3 py-2 rounded-md text-base font-medium"
              >
                Study Destination
              </a>
              <a
                href="#"
                className="   block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </a>
              <a
                href="#"
                className="   block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="   block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>

              
              <a
                href="#"
                className="block text-center text-[#F6941E] border border-[#F6941E] px-4 py-2 rounded-md text-base font-medium"
              >
                Enquire Now dddd
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
