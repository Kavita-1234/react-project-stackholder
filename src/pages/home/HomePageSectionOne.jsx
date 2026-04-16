import React from "react";
import "../../App.css";
import homePage from "../../assets/images/homePage.jpg";

export default function HomePageSectionOne() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${homePage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-12 py-10">

        {/* LEFT TEXT */}
        <div className="md:w-1/2 text-white">
          <h5 className="text-lg md:text-xl font-bold uppercase">
            Safe & Reliable Moving Services
          </h5>

          <h1 className="mt-4 text-white text-3xl md:text-5xl font-extrabold leading-snug">
            Professional Packers and Movers in Ranchi, Hazaribagh, Dhanbad,
            Deoghar, Koderma & Giridih
          </h1>

          <p className="mt-3 text-white text-base md:text-lg leading-relaxed">
            We handle your belongings with utmost care, ensuring a seamless and
            stress-free relocation experience. From packing to transportation,
            our expert team guarantees safety, efficiency, and reliability at
            every step.
          </p>

          <button className="mt-3 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6">
            Explore More
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-auto grid place-items-center">

          {/* ✅ SAME COLOR (#EB0046) */}
          <div
            className="w-full max-w-sm p-4 md:p-8 shadow-lg rounded"
            style={{ backgroundColor: "#EB0046" }}
          >

            <form className="grid gap-3">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name *"
                  className="p-2 text-sm rounded border bg-white"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="p-2 text-sm rounded border bg-white"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Phone *"
                  className="p-2 text-sm rounded border bg-white"
                />
                <select className="p-2 text-sm rounded border bg-white">
                  <option>Category *</option>
                  <option>Household Shifting</option>
                  <option>Office/Commercial</option>
                  <option>Car Shifting</option>
                  <option>Bike Shifting</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Moving From *"
                  className="p-2 text-sm rounded border bg-white"
                />
                <input
                  type="text"
                  placeholder="Moving To *"
                  className="p-2 text-sm rounded border bg-white"
                />
              </div>

              {/* Textarea */}
              <textarea
                placeholder="Item Details *"
                className="p-2 text-sm rounded border bg-white h-20"
              ></textarea>

              {/* Button */}
              <button className="bg-white text-black py-2 rounded font-semibold">
                Request Quote
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}