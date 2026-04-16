import React from "react";
import bg from "../../assets/images/bg.jpg"

export default function Location() {
    return (

        <div className="justify-center items-center bg-white mt-3 mb-3">
            {/* Heading */}
            <h1 className="text-red-500 text-4xl md:text-5xl font-extrabold text-center px-4">
                📍 Service Locations:
            </h1>
            <p className="text-black m-7 text-base pl-1">
                Ranchi | Deoghar | Dhanbad | Bokaro | Jamshedpur | Patna | Kolkata | Delhi | Mumbai | All India
            </p>
        </div>

    );
}