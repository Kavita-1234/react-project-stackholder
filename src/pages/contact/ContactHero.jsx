import React from "react";
import bg from "../../assets/images/bg.jpg"

export default function ContactOne() {
    return (
        <section id="service" className="flex justify-between items-center relative w-full h-[350px] overflow-hidden mb-0.5"
        >
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}></div>

            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex items-center h-full px-8 md:px-14 text-white text-left">
                <h1 className="mt-1 mb-auto text-white font-extrabold">CONTACT</h1>
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