import React from "react";
import serviceone from "../../assets/images/homeserviceone.jpg"
import servicetwo from "../../assets/images/homeservicetwo.jpg"
import servicethree from "../../assets/images/homeservicethree.jpg"
import servicefour from "../../assets/images/homeservicefour.jpg"

export default function HomePageSectionSix() {
    return (
        <div
            className=""
        >
            {/* Content */}
            <div className="">

                {/* Heading */}
                <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-4">
                    WHY CHOOSE US
                </h1>
                {/* Description */}
                <p className="text-left text-gray-500 mt-4 px-6 max-w-3xl mx-auto ml-0.5">
                    When it comes to relocating your home, office, or vehicle, choosing 
                    the right moving partner matters. Here’s why people across{" "}
                    <span className="text-gray-700 font-bold">Ranchi, Deoghar and Jharkhand</span>{" "}
                    trust us as their preferred{" "}
                    <span className="text-gray-700 font-bold">packers and movers:</span>
                </p>

                {/* Cards Container */}
                <div className="mt-10 flex flex-wrap justify-center gap-4 px-6">

                    {/* Card 1 */}
                    <div className="w-full sm:w-[42%] md:w-[16%] flex flex-col items-center rounded-lg p-2 bg-white shadow-md">
                        <img src={serviceone} alt="" className="h-10 w-10"/>
                        <h3 className="mt-2 font-semibold text-center text-base text-black"><span className="m-0 text-xl text-black">Safe & Secure Handling</span></h3>
                        <p className="text-gray-600 text-xs text-center mt-1">
                            We treat your belongings with the utmost care, ensuring they remain damage-free throughout the move.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full sm:w-[42%] md:w-[16%] flex flex-col items-center rounded-lg p-2 bg-white shadow-md">
                        <img src={servicetwo} alt="" className="h-10 w-10" />
                        <h3 className="mt-2 font-semibold text-center text-base text-black"><span className="m-0 text-xl text-black">Hassle-Free Relocation</span></h3>
                        <p className="text-black text-xs m-1 text-center">
                            From expert packing to smooth transportation, we take care of every step to provide a stress-free moving experience.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full sm:w-[42%] md:w-[16%] flex flex-col items-center rounded-lg p-2 bg-white shadow-md">
                        <img src={servicethree} alt="" className="h-10 w-10" />
                        <h3 className="mt-2 font-semibold text-center text-base text-black"><span className="m-0 text-xl text-black">Reliable & Efficient Service</span></h3>
                        <p className="text-black text-xs m-1 text-center">
                            Our experienced team guarantees timely and efficient delivery, making your move seamless and worry-free.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="w-full sm:w-[42%] md:w-[16%] flex flex-col items-center rounded-lg p-2 bg-white shadow-md hover:-rotate hover:translate-y-2 hover:bg-red-500 hover:shadow-xl cursor-pointer">
                        <img src={servicefour} alt="" className="h-10 w-10" />
                        <h3 className="mt-2 font-semibold text-center text-base text-black"><span className="m-0 text-xl text-black">Affordable & Customer Satisfaction First</span></h3>
                        <p className="text-black text-xs m-1 text-center">
                            Your peace of mind is our priority, and we strive to provide the best moving solutions tailored to your needs and budget.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}