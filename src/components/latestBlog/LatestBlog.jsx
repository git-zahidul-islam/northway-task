import { FaLongArrowAltRight, FaRegUser } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const blogs = [
    {
        id: 1,
        title: 'Emotional Intelligence in Education Building',
        date: 'July 24, 2024',
        image: 'https://i.ibb.co/QfJk6ZR/Screenshot-2024-09-04-124122.png',
    },
    {
        id: 2,
        title: 'Emotional Intelligence in Education Building',
        date: 'July 24, 2024',
        image: 'https://i.ibb.co/877Lp06/Screenshot-2024-09-04-124146.png',
    },
    {
        id: 3,
        title: 'Emotional Intelligence in Education Building',
        date: 'July 24, 2024',
        image: 'https://i.ibb.co/pKz3Grh/Screenshot-2024-09-04-124207.png',
    },
];

const LatestBlog = () => {
    return (
        <>
            <section className="py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="md:text-5xl text-3xl font-bold mb-2">Our Latest <span className="text-[#fba82c]">Blog</span></h2>
                    <p className="text-gray-600 text-base mb-10 md:w-2/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus fugiat sapiente libero cum ipsam. Veniam voluptates reprehenderit minus magni?</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="bg-white shadow-md rounded overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                                <div className="p-6 text-left">
                                    <div className="flex gap-2 items-center mb-2">
                                        <p><SlCalender /></p>
                                        <div className="text-sm text-gray-600">{blog.date}</div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-4 text-gray-800">{blog.title}</h3>
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <div className="flex gap-2 items-center">
                                            <p><FaRegUser /></p>
                                            <p>Back Theme</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <p><LuMessagesSquare size={18} /></p>
                                            <p>25 comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="flex mx-auto gap-2 items-center justify-center mt-8 px-6 py-2  border  rounded-sm shadow-lg border-[#e6931b] text-[#e6931b]">
                        <p className="font-bold">Browse More Blog</p>
                        <p><FaLongArrowAltRight /></p>
                    </button>
                </div>
            </section>
        </>

    );
};

export default LatestBlog;