import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';

const StudentSpeak = () => {
  return (
    <section>
      <div className="relative bg-cover bg-center py-12" style={{ backgroundImage: 'url("https://i.postimg.cc/sDHk78Pf/swiper-image.png")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto text-center text-white z-10">
        <h2 className="text-3xl font-bold mb-4">
          Student's <span className="text-orange-500">Speak</span>
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
      </div>

      {/* slide is here */}
      <div>
        <div>
          <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
                <div className="relative">
                  <img
                    className="rounded-t-lg object-cover h-48 w-full"
                    src={`https://placehold.co/300x300?text=Student+${index + 1}`}
                    alt={`Student ${index + 1}`}
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                    <button className="text-white text-3xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-5.197 3.023A1 1 0 018 13.384V7.618a1 1 0 011.555-.832l5.197 3.023a1 1 0 010 1.664z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Rashmi Borah</h3>
                  <p className="text-gray-500">Northeastern University, Boston</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-8 z-10 relative">
          <button className="prev-button mx-2 p-2 rounded-full bg-orange-500 text-white">
            <FaArrowLeft />
          </button>
          <button className="next-button mx-2 p-2 rounded-full bg-orange-500 text-white">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentSpeak;
