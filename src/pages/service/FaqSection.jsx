import React, { useState } from "react";
import { FaPlus, FaMinus, FaDesktop, FaTelegram, FaClock, FaLayerGroup } from "react-icons/fa6";
import sectionone from "../../assets/images/homesectionone.jpg";

export default function FaqSection() {

    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "What types of car repair services do you offer?",
            answer: "You shy shall while but wrote marry. Call why sake has sing pure. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.",
            icon: <FaDesktop />
        },
        {
            question: "How long does it take to repair a car on average?",
            answer: "Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.",
            icon: <FaClock />
        },
        {
            question: "What are the costs involved in repairing a car?",
            answer: "Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all.",
            icon: <FaTelegram />
        },
        {
            question: "How do I know if my car requires repair?",
            answer: "Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgence one own you inquietude sympathize.",
            icon: <FaLayerGroup />
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto bg-white overflow-hidden">

            {/* Main Container */}
            <div className="flex flex-wrap flex-col md:flex-row items-center md:mt-20 mt-5">

                {/* LEFT TEXT */}
                <div className="items-start text-left md:w-1/2 pl-8 text-left text-red-600">

                    <h1 className="text-4xl pl-7 md:text-7xl font-bold pb-2">
                        Auto Maintenance FAQs
                        <div className="w-40 h-0.5 bg-red-500 ml-3 mt-2"></div>
                    </h1>
                    


                    {/* FAQ List */}
                    {faqs.map((item, index) => (
                        <div key={index} className="mb-4 bg-gray-100 rounded-lg p-4">

                            {/* Question Row */}
                            <div
                                className="flex justify-between items-center cursor-pointer text-black text-xs h-3"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-red-500 text-lg">
                                        {item.icon}
                                    </span>
                                    <h6 className="font-semibold">{item.question}</h6>
                                </div>

                                {/* + / - Icon */}
                                {openIndex === index ? (
                                    <FaMinus />
                                ) : (
                                    <FaPlus />
                                )}
                            </div>

                            {/* Answer */}
                            {openIndex === index && (
                                <p className="mt-3 text-gray-600 text-xs">
                                    {item.answer}
                                </p>
                            )}

                        </div>
                    ))}
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-1/2">
                    <img
                        src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-31.jpg"
                        alt="section"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

            </div>
        </div>
    );
}