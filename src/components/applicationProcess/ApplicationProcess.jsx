import { FaRegAddressCard, FaUniversity, FaFileAlt, FaBriefcase, FaUserCheck, FaSchool, FaSearch } from 'react-icons/fa';

function ApplicationProcess() {
  return (
    <div className="bg-white py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">
          <span className="text-orange-500">Our</span> Application Process
        </h2>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaRegAddressCard className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">Clients profile review</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaUserCheck className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">Onboarding meeting</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaSearch className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">University search</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaFileAlt className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">Statement of purpose, CV review and edit</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaSchool className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">University Shortlist</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaUniversity className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">University application</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-dotted border-gray-400 rounded-full p-4 mb-4">
            <FaBriefcase className="text-5xl text-gray-600" />
          </div>
          <p className="font-semibold">Arranging mock interview</p>
        </div>
      </div>
    </div>
  );
}

export default ApplicationProcess;
