import React from "react";

export default function Experience() {
    return (
        <div className="max-w-6xl mx-auto bg-white overflow-hidden px-4 md:px-0">

            {/* Main Container */}
            <div className="flex flex-col md:flex-row items-start gap-10 mt-0 md:mt-10">

                {/* LEFT TEXT */}
                <div className="w-full md:w-1/2 text-left text-red-600">

                    {/* Small Heading */}
                    <h5 className="text-xl text-red-600 font-semibold tracking-wide">
                        Who We Are
                    </h5>

                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 text-black tracking-wide">
                        WE HAVE 15 YEARS <br /> OF EXPERIENCE
                    </h1>

                    {/* Paragraph Section */}
                    <div className="mt-2">

                        <p className="text-[16px] text-gray-500">
                            My name is{" "}
                            <span className="text-gray-600 font-bold">
                                Sakaldeo Chaudhary
                            </span>
                            , and we have been in the{" "}
                            <span className="text-gray-600 font-bold">
                                packers and movers industry since 2010.
                            </span>{" "}
                            As a trusted{" "}
                            <span className="text-gray-600 font-bold">
                                Packers and Movers company in Ranchi,
                            </span>{" "}
                            we have been delivering seamless moving experiences across{" "}
                            <span className="text-gray-600 font-bold">India.</span> Starting in{" "}
                            <span className="text-gray-600 font-bold">Ranchi,</span> we are now
                            headquartered in{" "}
                            <span className="text-gray-600 font-bold">
                                Ranchi and Deoghar
                            </span>{" "}
                            and operate as a{" "}
                            <span className="text-gray-600 font-bold">
                                government-registered firm.
                            </span>
                            <br />
                            <br />
                        </p>

                        <p className="text-[16px] text-gray-500">
                            With over{" "}
                            <span className="text-gray-600 font-bold">
                                15 years of experience,
                            </span>{" "}
                            we have provided{" "}
                            <span className="text-gray-600 font-bold">
                                expert moving services nationwide.
                            </span>{" "}
                            Our skilled team of{" "}
                            <span className="text-gray-600 font-bold">
                                500+ employees
                            </span>{" "}
                            and a fleet of{" "}
                            <span className="text-gray-600 font-bold">
                                100+ vehicles
                            </span>{" "}
                            ensure{" "}
                            <span className="text-gray-600 font-bold">
                                safe, efficient, and timely relocations.
                            </span>
                            <br />
                            <br />
                        </p>

                        <p className="text-[16px] text-gray-500">
                            We understand our clients’ unique needs and take pride in delivering{" "}
                            <span className="text-gray-600 font-bold">
                                exceptional customer service.
                            </span>{" "}
                            Our goal is to provide{" "}
                            <span className="text-gray-600 font-bold">
                                professional, reliable, and affordable moving solutions.
                            </span>
                        </p>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full md:w-1/2 hidden md:block">
                    <img
                        src="https://sakaldeorelocation.com/wp-content/uploads/2025/02/Sakaldeo-Relocation-Packers-Movers-in-ranchi.jpg"
                        alt="section"
                        className="w-full h-auto rounded-2xl"
                    />
                </div>

            </div>
        </div>
    );
}