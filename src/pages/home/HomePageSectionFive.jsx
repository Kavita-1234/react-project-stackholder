import React from "react";
import bg from "../../assets/images/bg.jpg"

export default function HomePageSectionFive() {
    return (
        <div
            className="flex flex-wrap bg-center bg-cover relative py-32"
            style={{ backgroundImage: `url(${bg})` }}
        >

            <div className="absolute inset-0 bg-black/80">

                {/* 🔥 Content (above overlay) */}
                <div className="relative z-10 ">
                    {/* Heading */}
                    <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center px-4">
                        Schedule Your Appointment Today
                    </h1>
                    <p className="text-white m-7 text-base">Your Packing and Loading Service Specialist</p>

                    <button className="bg-red-500 m-3 hover:bg-red-600 text-white px-3">SCHEDULE APPOINTMENT</button>

                </div>
            </div >
        </div >
    );
}