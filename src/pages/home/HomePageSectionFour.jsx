import React from "react";
import Image from "../../assets/images/image.jpg";

export default function HomePageSectionFour() {
    return (
        <div className="max-w-6xl mx-auto bg-white py-16 px-6">

            {/* Main Container */}
            <div className="flex flex-col md:flex-row items-start gap-10">

                {/* Left IMAGE */}
                <div className="w-full md:w-1/2">
                    <img
                        src={Image}
                        alt="section"
                        className="w-full h-auto rounded-2xl"
                    />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 w-full">

                    {/* Heading Section */}
                    <div className="text-left space-y-2 text-red-600">
                        <h5 className="text-red-600 font-semibold text-lg m-0">
                            How we work
                        </h5>

                        <h1 className="text-black text-3xl md:text-5xl font-extrabold leading-tight m-0">
                            Packers and Movers in <br />
                            Ranchi, Deoghar, and All of Jharkhand
                        </h1>

                        <p className="text-gray-500 text-sm leading-relaxed m-0">
                            We pack and load your goods safely, transport them on time, and unload them securely at your destination. Book our service for a hassle-free move!
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-2">

                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center p-4 border-r border-gray-300 m-0">
                            <img src="https://sakaldeorelocation.com/wp-content/uploads/2025/02/Assign-us-Service%E2%80%8B.png" className="w-16" />
                            <p className="text-red-600 font-bold mt-2">01. Assign us Service</p>
                            <p className="text-sm text-gray-600">
                                Once you are satisfied with our quotation, you can book our service.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center p-4 border-r border-gray-300 m-0">
                            <img src="https://sakaldeorelocation.com/wp-content/uploads/2025/02/packing-and-unloading.png" className="w-16" />
                            <p className="text-red-600 font-bold mt-2">03. Transportation Service</p>
                            <p className="text-sm text-gray-600">
                                Once you are satisfied with our quotation, you can book our service.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center p-4 border-r border-gray-300 m-0">
                            <img src="https://sakaldeorelocation.com/wp-content/uploads/2025/02/transportation-service.png" className="w-16" />
                            <p className="text-red-600 font-bold mt-2">02. Packing and Loading</p>
                            <p className="text-sm text-gray-600">
                                We will safely pack all your goods and load them into our vehicle.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center p-4 border-r border-gray-300 m-0">
                            <img src="https://sakaldeorelocation.com/wp-content/uploads/2025/02/Unloading-and-Unpacking.png" className="w-16" />
                            <p className="text-red-600 font-bold mt-2">04. Unloading and Unpacking</p>
                            <p className="text-sm text-gray-600">
                                We will safely pack all your goods and load them into our vehicle.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}