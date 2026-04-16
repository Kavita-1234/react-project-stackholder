import React from "react";
import { FaCircle } from "react-icons/fa6";
import sectionone from "../../assets/images/homesectionone.jpg";

export default function HomePageSectionTwo() {
  return (
    <div className="max-w-6xl mx-auto bg-white overflow-hidden">
      
      {/* Main Container */}
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        
        {/* LEFT TEXT */}
        <div className="md:w-1/2 pl-8 text-left text-red-600">
          
          <h5 className="text-xl md:pl-7 text-left space-y-1 text-red-600 font-semibold">
            WHO WE ARE
          </h5>

          <h2 className="text-4xl md:pl-7 md:text-5xl font-bold mt-2">
            WE HAVE 15 YEARS <br /> OF EXPERIENCE
          </h2>

          <h3 className="text-2xl md:pl-7 mt-auto font-bold text-black mt-4">
            🚚 Best Packing and Moving Services in Ranchi, Jharkhand
          </h3>

          <p className="text-[16px] md:pl-7 mt-auto text-gray-500 mt-4">
            Looking for{" "}
            <span className="text-gray-800 font-semibold">
              trusted packers and movers in Ranchi, Deoghar, Koderma, and Giridih
            </span>{" "}
            <span className="text-gray-700">
              ? Sakaldeo Relocation Packers & Movers provides hassle-free
              household shifting, office relocation, vehicle transportation,
              and local shifting services.
            </span>{" "}
            With years of experience, our team ensures a safe, smooth, and affordable moving experience.
          </p>

          {/* LIST */}
          <ul className="mt-1 pl-7 space-y-1">
            
            <li className="flex items-start gap-2">
              <FaCircle className="text-red-500 mt-1" />
              <div>
                <span className="text-gray-700 font-bold">
                  Safe & Secure Handling
                </span>
                <p className="text-gray-500 text-sm">
                  –  We treat your belongings with the utmost care, ensuring they remain damage-free throughout the move.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <FaCircle className="text-red-500 mt-1" />
              <div>
                <span className="text-gray-700 font-bold">
                  Hassle-Free Relocation
                </span>
                <p className="text-gray-500 text-sm">
                  – From expert packing to smooth transportation, we take care of every step to provide a stress-free moving experience.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <FaCircle className="text-red-500 mt-1" />
              <div>
                <span className="text-gray-700 font-bold">
                  Reliable & Efficient Service
                </span>
                <p className="text-gray-500 text-sm">
                  – Our experienced team guarantees timely and efficient delivery, making your move seamless and worry-free.
                </p>
              </div>
            </li>

            <li className="flex text-left items-start gap-2">
              <FaCircle className="text-red-500 mt-1" />
              <div>
                <span className="text-gray-700 font-bold">
                  Customer Satisfaction First
                </span>
                <p className="text-gray-500 text-sm">
                  – Your peace of mind is our priority, and we strive to provide the best moving solutions tailored to your needs.
                </p>
              </div>
            </li>

          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2">
          <img 
            src={sectionone}
            alt="section"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

      </div>
    </div>
  );
}