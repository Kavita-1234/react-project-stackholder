import React from "react";
import {
    FaHome,
    FaBuilding,
    FaTractor,
    FaTruckLoading,
    FaLuggageCart,
    FaCheckSquare
} from "react-icons/fa";
import Cardsbg from "../../assets/images/cardsbg.jpg";

export default function HomePageSectionThree() {
    return (
        <div
            className="bg-center bg-cover relative py-10"
            style={{ backgroundImage: `url(${Cardsbg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/90"></div>

            {/* Content */}
            <div className="relative z-10">

                {/* Heading */}
                <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center px-4">
                    Best Packers & Movers Services That <br />
                    We Offer You
                </h1>

                {/* Description */}
                <p className="text-center text-white mt-4 px-6 max-w-3xl mx-auto">
                    We specialize in hassle-free packing, safe transportation,
                    and efficient delivery, ensuring a smooth moving experience
                    for homes, offices, and businesses.
                </p>

                {/* Cards Container */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 px-6">

                    {/* Card 1 */}
                    <div className="w-full sm:w-[45%] md:w-[30%] h-64 flex flex-col items-center rounded-xl p-4 bg-white/90 shadow-lg">
                        <FaHome className="text-red-600 h-10 w-14" />
                        <h3 className="mt-4 font-bold"><span className="text-xl text-red-600">Home Relocation</span></h3>
                        <p className="text-black text-sm mt-2 text-center">
                            We ensure a smooth home goods move, handling your belongings with care from packing to unpacking, making your relocation stress-free and efficient.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full sm:w-[45%] md:w-[30%] h-64 flex flex-col items-center rounded-xl p-4 bg-white/90 shadow-lg">
                        <FaBuilding className="text-red-600 h-10 w-14" />
                        <h3 className="mt-4 font-bold"><span className="text-xl text-red-600">Office Relocation</span></h3>
                        <p className="text-black text-sm mt-2 text-center">
                            Our efficient office relocation service minimizes downtime and ensures a quick, seamless transition to your new workspace with minimal disruption.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full sm:w-[45%] md:w-[30%] h-64 flex flex-col items-center rounded-xl p-4 bg-white/90 shadow-lg">
                        <FaTractor className="text-red-600 h-10 w-14" />
                        <h3 className="mt-4 font-bold"><span className="text-xl text-red-600">Car Transportation</span></h3>
                        <p className="text-black text-sm mt-2 text-center">
                            Safe and secure car transport, ensuring your vehicle arrives on time and without damage, providing reliable and hassle-free service every time.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="w-full sm:w-[45%] md:w-[30%] h-64 flex flex-col items-center rounded-xl p-4 bg-white/90 shadow-lg">
                        <FaTruckLoading className="text-red-600 h-10 w-14" />
                        <h3 className="mt-4 font-bold"><span className="text-xl text-red-600">Courier & Cargo</span></h3>
                        <p className="text-black text-sm mt-2 text-center">
                            Fast, reliable courier and cargo services for sending packages of all sizes, with secure, on-time delivery and real-time tracking for peace of mind.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="w-full sm:w-[45%] md:w-[30%] h-64 flex flex-col items-center rounded-xl p-4 bg-white/90 shadow-lg">
                        <FaLuggageCart className="text-red-600 h-10 w-14" />
                        <h3 className="mt-4 font-bold"><span className="text-xl text-red-600">Luggage Delivery</span></h3>
                        <p className="text-black text-sm mt-2 text-center">
                            Hassle-free luggage delivery, picking up your bags and ensuring they arrive safely at your destination, saving you time and effort during travel.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="w-full sm:w-[45%] md:w-[30%] h-64 flex flex-col items-center rounded-xl p-4 bg-white/90 shadow-lg">
                        <FaCheckSquare className="text-red-600 h-10 w-14" />
                        <h3 className="mt-4 font-bold"><span className="text-xl text-red-600">Goods Insurance</span></h3>
                        <p className="text-black text-sm mt-2 text-center">
                            Comprehensive insurance coverage for your items during transit, providing peace of mind against damage, loss, or theft throughout the entire moving process.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}