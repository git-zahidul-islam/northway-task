import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import faqImage from '../../assets/images/faq.png'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center md:items-start">

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-black mb-4">
          Study in <span className="text-orange-500">USA FAQ's</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold">
                  Can you work while studying in the United States?
                </p>
                {openIndex === index ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-500 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 flex justify-center">
        <img
          src={faqImage}
          alt="Student"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default FaqSection;