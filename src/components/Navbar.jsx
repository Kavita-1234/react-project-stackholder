import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        flex justify-between items-center px-8 md:px-14 py-3
        bg-black backdrop-blur-md sticky top-0 z-50
        text-white
      "
    >

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
        {[
          { name: "Home", link: "/" },
          { name: "Service", link: "/service" },
          { name: "About", link: "/about" },
          { name: "Contact", link: "/contact" },
        ].map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              className="relative transition hover:text-white"
            >
              {item.name}

              {/* softer underline, subtle color */}
              <span
                className="
                  absolute left-0 bottom-[-3px] h-[2px] w-0 
                  bg-gradient-to-r from-[#7d82ff] to-[#b17fff]
                  rounded-full opacity-70
                  transition-all duration-300 group-hover:w-full
                "
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className="
            md:hidden absolute top-[70px] left-0 w-full 
            bg-[#11141c]/97 backdrop-blur-xl 
            flex flex-col items-center gap-6 py-6
            border-t border-[#252a33]
            shadow-[0_8px_20px_rgba(0,0,0,0.45)]
            text-[#d4d6de]
          "
        >
          {[
            { name: "Home", link: "/" },
            { name: "Service", link: "/service" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-white text-lg transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <button className="text-white bg-red-500 hover:bg-red-600 px-2 font-bold">REQUEST A QUOTE
      </button>
    </nav>
  );
}
