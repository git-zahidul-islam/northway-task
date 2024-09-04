import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import footerImage from '../../../public/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-20 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 ">
        {/* Logo and Description */}
        <div className="text-gray-400">
          <img
            src={footerImage}
            alt="Northway Global"
            className="h-10 mb-4"
          />
          <p className="mb-4 w-3/4">
            Travel Blog Elementor Template Kit. Powered by Designs. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Category Links */}
        <div className="text-gray-400">
          <h2 className="text-white text-xl mb-4 font-bold">Category</h2>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Immigration</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Study Abroad</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Uncategorized</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Scholarship</a>
            </li>
            <li className="hover:text-white">
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        {/* Latest Post Links */}
        <div className="text-gray-400">
          <h2 className="text-white text-xl mb-4 font-bold">Latest Post</h2>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Study in China</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Fulbright Scholarships in China</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">How to Apply to Foreign Universities</a>
            </li>
          </ul>
        </div>

        {/* Latest Post Links */}
        <div className="text-gray-400">
          <h2 className="text-white text-xl mb-4 font-bold">Contact Us</h2>
          <div className="space-y-2">
            <p className="flex gap-2 items-center">
              <span>
                <IoLocationOutline size={20} color="orange" />
              </span>
              <span>
                Kha-121/4(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near
                American Embassy)
              </span>
            </p>

            <p className="flex gap-2 items-center">
              <span>
                <LuPhone size={20} color="orange" />
              </span>
              <span>Phone: +880 1807-002687</span>
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <MdOutlineEmail size={20} color="orange" />
              </span>
              <span>Email: info@northwayglobal.com.bd</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto border-b border-gray-700 my-6"></div>
      <p className="text-center text-gray-400">
        Designed and Developed By Zahidul Islam
      </p>
    </footer>
  );
};

export default Footer;
