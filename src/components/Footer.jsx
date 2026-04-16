import React from "react";
import { FaClock } from "react-icons/fa";
import Footerimage from "../assets/images/footer.jpg";

export default function Footer() {
    return (
        <footer
            className="relative text-white py-20 bg-cover bg-center"
            style={{
                backgroundImage: `url(${Footerimage})`,
            }}
        >
            {/* 🔥 Overlay (black transparent layer) */}
            <div className="absolute inset-0 bg-black/90"></div>

            {/* 🔥 Content (above overlay) */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Information */}
                <div>
                    <p className="text-sm leading-6 text-gray-300">
                        We specialize in hassle-free packing, safe transport, and quick delivery
                        for homes, offices, and businesses. With a skilled team and modern logistics,
                        <span className="text-white font-semibold"> Sakaldeo Relocation </span>
                        ensures secure, timely, and stress-free moves. Trust the best
                        <span className="text-white font-semibold">
                            {" "}Packers and Movers in Ranchi, Deoghar, and Jharkhand
                        </span>
                        for affordable, professional relocation services!
                    </p>
                </div>

                {/* Pages */}
                <div>
                    <h2 className="text-red-600 font-bold mb-3"><span className="text-red-500">Other Pages</span></h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Team</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="font-bold mb-3"><span className="text-red-500">Quick Links</span></h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms of Services</li>
                        <li className="hover:text-white cursor-pointer">Blogs</li>
                        <li className="hover:text-white cursor-pointer">Pricing & Packs</li>
                        <li className="hover:text-white cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Work Hours */}
                <div>
                    <h2 className="font-bold mb-2"><span className="text-red-500">Work Hours</span></h2>

                    <div className="flex items-center gap-2 text-gray-300 mb-3">
                        <FaClock />
                        <span>Mon-Sun 09:00 AM - 7:00 PM</span>
                    </div>

                    <p className="text-sm text-gray-300">
                        Contact us for <span className="text-white">safe, hassle-free moving!</span>
                        Top Packers and Movers Ranchi, Deoghar, and Jharkhand.
                    </p>

                    <button className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700">
                        Click Here
                    </button>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 text-center text-whit">
                © 2025 Sakaldeo Relocation (Packers and Movers) | Design & Manage by 
                <span className="text-purple-600">PreOn Solution</span>
            </div>
        </footer>
    );
}