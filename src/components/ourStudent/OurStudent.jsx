import { FaQuoteLeft, FaStar } from 'react-icons/fa';
// images
import lady1 from '../../assets/images/lady1.jpg'
import lady3 from '../../assets/images/layd2.jpg'
import lady2 from '../../assets/images/lady3.jpg'

const OurStudent = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lisa Dowen",
      title: "Student",
      imgSrc: lady1,
      quote:
        "We are the representatives of more than 30+ universities in Australian countries and our admission",
    },
    {
      id: 2,
      name: "Lisa Dowen",
      title: "Student",
      imgSrc: lady2,
      quote:
        "We are the representatives of more than 30+ universities in Australian countries and our admission",
    },
    {
      id: 3,
      name: "Lisa Dowen",
      title: "Student",
      imgSrc: lady3,
      quote:
        "We are the representatives of more than 30+ universities in Australian countries and our admission",
    },
  ];

  return (
    <section className='mt-20'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            What’s <span className="text-orange-500">Our student say</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`bg-white shadow-lg p-6 ${testimonial.id == 2 ? "border-[2px] border-b-[#F6941E]" : "border"}`}>
              <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500" />
                ))}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStudent;
