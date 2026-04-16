import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import sectionone from "../../assets/images/homesectionone.jpg";

export default function WhyChooseUs() {
    return (
        <div className="max-w-6xl mx-auto bg-white overflow-hidden">

            {/* Main Container */}
            <div className="flex flex-wrap items-start text-left flex-col md:flex-row mt-20">

                {/* LEFT TEXT */}
                <div className="items-start text-left md:w-1/2 text-left text-red-600">

                    <h1 className="pl-7 text-4xl md:text-7xl font-bold mt-2">
                        📍 Why Choose Sakaldeo Relocation?
                    </h1>

                    <p className="pl-7 text-[16px] mt-auto text-gray-500 mt-4">
                        With 17+ years of experience,{" "}
                        <span className="text-gray-600 font-bold">
                            Sakaldeo Relocation
                        </span>{" "}
                        is a trusted name in
                        <span className="text-gray-600 font-bold">
                            packers and movers services in Ranchi, Deoghar, and across India.
                        </span>{" "}
                        We offer
                        <span className="text-gray-600 font-bold">
                            safe, affordable, and on-time relocation solutions
                        </span>{" "}
                        backed by a skilled team, 100+ GPS-enabled trucks, and 24×7 customer support. Whether it’s
                        <span className="text-gray-600 font-bold">
                            home shifting, office relocation, vehicle transport, or warehouse sto
                        </span>{" "}
                    </p>

                    {/* LIST */}
                    <ul className="mt-3 space-y-1">

                        <li className="mt-3 font-semibold text-xl text-black flex items-start gap-2">
                            <FaCircleDot className="text-red-500 mt-1" />
                            ✅ 17+ Years of Experience
                        </li>
                        <li className="mt-3 font-semibold text-xl text-black flex items-start gap-2">
                            <FaCircleDot className="text-red-500 mt-1" />
                            ✅ 500+ Verified Professionals
                        </li>
                        <li className="mt-3 font-semibold text-xl text-black flex items-start gap-2">
                            <FaCircleDot className="text-red-500 mt-1" />
                            ✅ 100+ Fleet Vehicles
                        </li>
                        <li className="mt-3 font-semibold text-xl text-black flex items-start gap-2">
                            <FaCircleDot className="text-red-500 mt-1" />
                            ✅ All India Service Network
                        </li>
                        <li className="mt-3 font-semibold text-xl text-black flex items-start gap-2">
                            <FaCircleDot className="text-red-500 mt-1" />
                            ✅ Transparent Pricing – No Hidden Costs
                        </li>
                        <li className="mt-3 font-semibold text-xl text-black flex items-start gap-2">
                            <FaCircleDot className="text-red-500 mt-1" />
                            ✅  24/7 Customer Support
                        </li>

                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-1/2">
                    <img
                        src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-29.jpg"
                        alt="section"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

            </div>
        </div>
    );
}