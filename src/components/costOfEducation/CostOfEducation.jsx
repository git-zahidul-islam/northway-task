import image from '../../assets/images/cost-education.png'

const CostOfEducation = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center md:px-6 px-2 py-6 max-w-[1140px] mx-auto">
            {/* Left Image Section */}
            <div className="relative w-full lg:w-[40%] ">
                <img src={image} alt="Cost of Education" className="mx-aut" />
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>
            </div>
            {/* Right Text Section */}
            <div className="w-full lg:w-[60%] h-[369px] p-2  pl-0 lg:pl-14">
                <h2 className="text-3xl lg:text-5xl font-bold mt-6 mb-4">
                    <span className="text-[#F6941E]">Cost</span> of education
                </h2>
                <p className="mb-2 ">
                    In the U.S., tuition fees vary based on the state, the university funding model, and the student's country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board, they’ve rendered an estimate of last year’s average tuition costs, which will roughly reflect the next few years.
                </p>
                <ul className="list-none">
                    <li className="text-[#F6941E] font-bold mb-1">• Total Expenses 41535</li>
                    <li className="mb-1">• Tuition Fees for one-year (Inclusive) 25000</li>
                    <li className="mb-1">• Living and Accommodation 15000</li>
                    <li className="mb-1">• Airfare from India to USA 1000</li>
                    <li>• Visa Fees (Visa & SEVIS) 535</li>
                </ul>
            </div>
        </div>
    );
};

export default CostOfEducation;
