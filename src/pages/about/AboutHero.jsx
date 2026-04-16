import React from "react";
import ab from "../../assets/images/About.jpg"

export default function AboutHero() {
    return (
        <section id="about" className="flex justify-between items-center text-center relative w-full h-[350px] overflow-hidden"
        >
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${ab})` }}></div>

            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex items-center h-full px-8 md:px-14 text-white text-left">
                <h1 className="text-center mt-1 mb-auto text-white font-extrabold mt-5">ABOUT</h1>
            </div>
            {/* Slanted Bottom Shape */}
            <div
                className="absolute bottom-0 left-0 w-full h-[200px] bg-white"
                style={{
                    clipPath: "polygon(0 20%, 100% 50%, 100% 100%, 0% 100%)",
                   
                }}
            ></div>
        </section>
    );
}