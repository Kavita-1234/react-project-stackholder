import React from "react";
import bg from "../../assets/images/bg.jpg";
import { FaCheck } from "react-icons/fa6"

export default function AboutRelocation() {
    return (
        <div className="max-w-6xl mx-auto bg-white py-16 px-6 mt-4 md:mt-10">

            {/* Main Container */}
            <div className="flex flex-col md:flex-row items-start gap-10">

                {/* Left IMAGE */}
                <div className="w-full md:w-1/2 hidden md:block">
                    <img
                        src={bg}
                        alt="section"
                        className="w-full h-auto"
                    />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 w-full">

                    {/* Heading Section */}
                    <div className="text-left space-y-2 text-red-600">
                        <h5 className="text-red-600 font-extrabold text-lg m-0 tracking-wide">
                            About Sakaldeo Relocation
                        </h5>

                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-black tracking-wide">
                            We Provide Expert Packers and Movers Service
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed m-0 mt-2">
                            Sakaldeo Relocation offers the most comprehensive relocation services across India.
                            We make residential and commercial moving easy for you.
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed m-0 mt-3">
                            We provide corporate relocation, packing and loading, international and domestic moving,
                            and more as per your needs.
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed m-0 mt-3">
                            We use the latest techniques to ensure utmost client satisfaction. Whether moving locally or globally,
                            we strive to provide the best possible service.
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed m-0 mt-3">
                            Our services include moving all types of household items, from fragile goods to heavy furniture
                            and cabinets.
                        </p>
                        <p className="flex items-start gap-2 text-gray-500 text-sm mt-3">
                            <FaCheck className="text-red-500 mt-1" />
                            <span>
                                It possible no husbands jennings ye offended packages pleasant.
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}