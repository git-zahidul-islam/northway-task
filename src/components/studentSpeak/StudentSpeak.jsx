import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import img1 from '../../assets/student-speak/speak-i3.jpg'
import img2 from '../../assets/student-speak/student-sp2.png'
import img3 from '../../assets/student-speak/student-speak1.jpg'

const StudentSpeak = () => {
  return (
    <section className='relative min-h-[720px]'>
      <div
        className="relative bg-cover bg-center py-12 lg:h-[380px]"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/sDHk78Pf/swiper-image.png")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto text-center text-white z-10">
          <h2 className="text-3xl font-bold mb-4">
            Student's <span className="text-orange-500">Speak</span>
          </h2>
          <p className="mb-10 md:w-[60%] w-full mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* slide image */}
      <div className='lg:absolute top-20 flex flex-col justify-center items-center w-full h-full'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center lg:gap-0 md:gap-5 gap-0'>
          <div className="lg:h-[328px] lg:w-[330px] md:p-6 p-4 bg-[#FFFFFF] shadow-md">
            <img className='lg:h-[180px] lg:w-[280px]' src={img1} alt="logo" />
            <div className='space-y-2 mt-5'>
            <p className="text-4xl font-bold text-[#1E1E1E]">Rashmi Borah</p>
            <p className="text-base font-normal text-[#1E1E1ECC]">Northeastern University, Boston</p>

            </div>
          </div>
          <div className="lg:h-[395px] lg:w-[451px] md:p-6 p-4 bg-[#FFFFFF] shadow-md">
            <img className='lg:h-[250px] lg:w-[400px]' src={img2} alt="logo" />
           <div className='space-y-2 mt-5'>
            <p className="text-4xl font-bold text-[#1E1E1E]">Rashmi Borah</p>
            <p className="text-base font-normal text-[#1E1E1ECC]">Northeastern University, Boston</p>

            </div>
          </div>
          <div className="lg:h-[328px] lg:w-[330px] md:p-6 p-4 bg-[#FFFFFF] shadow-md">
            <img className='lg:h-[180px] lg:w-[280px]' src={img3} alt="logo" />
            <div className='space-y-2 mt-5'>
            <p className="text-4xl font-bold text-[#1E1E1E]">Rashmi Borah</p>
            <p className="text-base font-normal text-[#1E1E1ECC]">Northeastern University, Boston</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 gap-5">
          <TiArrowLeft className='bg-[#F6941E33] rounded-full' size={30}/>
          <TiArrowRight className='bg-[#F6941E] rounded-full' size={30}/>
        </div>
      </div>
    </section>
  );
};

export default StudentSpeak;
