import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import sectionone from "../../assets/images/homesectionone.jpg";

export default function Reasons() {
    return (
        <div className="max-w-6xl mx-auto bg-white overflow-hidden">

            {/* Main Container */}
            <div className="flex flex-wrap flex-col md:flex-row mt-5 md:mt-1">

                {/* LEFT TEXT */}
                <div className="w-full md:w-1/2 px-4 md:px-0 text-left">

                    <h3 className="text-lg text-black font-black mt-3">
                        Key Services & Reasons
                    </h3>

                    <p className="text-[16px] text-gray-500 mt-4 leading-relaxed">
                        We operate from{" "}
                        <span className="text-gray-600 font-bold">
                            Ranchi and Deoghar, Jharkhand,
                        </span>{" "}
                        providing top-notch relocation services. With a vast network, we serve
                        <span className="text-gray-600 font-bold">
                            all across India and abroad,
                        </span>{" "}
                        ensuring safe and efficient moving solutions. <br /> <br />
                        Our services extend to
                        <span className="text-gray-600 font-bold">
                            Ahmedabad, Aligarh, Bangalore, Chennai, Hyderabad, Amritsar, Gurgaon, Dehradun, Noida, VAPI, Pune, Patna, Ghaziabad, Bhubaneswar, Haridwar, Lucknow, Coimbatore, Mussoorie, Dharamshala, Mangalore, Madurai, Shillong, Visakhapatnam, Varanasi, Jaisalmer, Srinagar, Gangtok, Thiruvananthapuram, Chandigarh, Kodaikanal, Mysore, Kochi, Pondicherry, Leh,
                        </span>{" "}
                        and many more locations. <br /> <br />

                        With an extensive fleet of
                        <span className="text-gray-600 font-bold">
                            1500+ vehicles,
                        </span>{" "}
                        we ensure seamless and reliable transportation for your home and office relocation needs.

                    </p>

                </div>

                {/* RIGHT list */}
                <div className="md:w-1/2 mt-3 md:mt-7">
                    {/* LIST */}
                    <ul className="mt-2 space-y-2">

                        <li className="flex items-start gap-2">
                            <FaCircleDot className="text-red-600 mt-1 w-5" />
                            <p className="text-gray-500 text-sm">
                                <span className="text-gray-800 font-semibold">
                                    Home & Office Shifting 
                                </span>{" "}
                                - Smooth and hassle-free relocation for homes, offices, and businesses.
                            </p>
                        </li>

                        <li className="flex items-start gap-2">
                            <FaCircleDot className="text-red-600 mt-1 w-5" />
                            <p className="text-gray-500 text-sm">
                                <span className="text-gray-800 font-semibold">
                                    Safe Packing & Loading
                                </span>{" "}
                                - High-quality packing materials and expert handling for fragile & bulky items.
                            </p>
                        </li>

                        <li className="flex items-start gap-2">
                            <FaCircleDot className="text-red-600 mt-1 w-5" />
                            <p className="text-gray-500 text-sm">
                                <span className="text-gray-800 font-semibold">
                                    Local & Nationwide Moving
                                </span>{" "}
                                - Services available across India, ensuring timely & secure delivery.
                            </p>
                        </li>

                        <li className="flex items-start gap-2">
                            <FaCircleDot className="text-red-600 mt-1 w-5" />
                            <p className="text-gray-500 text-sm">
                                <span className="text-gray-800 font-semibold">
                                    Affordable & Reliable
                                </span>{" "}
                                - Cost-effective solutions tailored to your moving needs.
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
}