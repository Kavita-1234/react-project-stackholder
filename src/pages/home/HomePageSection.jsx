import React from "react";

export default function HomePageSection() {
  return (
    <section id="home" className="bg-white">

      <div className="flex flex-col items-center justify-center py-20 gap-10">
        <button className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-500">
          📞 Ranchi Office
        </button>

        <button className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-500">
          📞 Deoghar Office
        </button>

      </div>

    </section>
  );
}