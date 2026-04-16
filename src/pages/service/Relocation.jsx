import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Relocation() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <section id="section"
            className=""
        >
            <div className="container max-w-7xl">
                {/* information or heading */}
                <div className="heading text-center mb-10">
                    <h1 className="text-black font-black text-3xl md:text-5xl font-extrabold">
                        ✅ Sakaldeo Relocation – Our Professional Moving Services
                    </h1>
                    <p className="text-black font-bold mt-4 text-base">🚛
                        Trusted Packers and Movers Since 2007 <br />
                        <span className=" text-gray-500 text-base block mt-2">Serving Ranchi, Deoghar & All Jharkhand with 100+ Vehicles and 100+ Trained Staff</span>
                    </p>

                </div>


                {/* Cards Section 1*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Card 1 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="bg-pink-50 p-6 flex flex-col items-center text-center h-auto">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-23.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            1. Household Shifting Services
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            We specialize in safe and damage-free home shifting. From compact apartments to large villas, our expert team handles packing, loading, transporting, and unpacking with care. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ Premium Packing <br />
                                ✅ Door-to-Door Delivery <br />
                                ✅ Furniture Dismantling & Reassembly
                            </span>
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-green-50 p-6 flex flex-col items-center text-center h-auto">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-25.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            2. Office & Corporate Relocation
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Minimize your business downtime with our professional office relocation services. We offer weekend or overnight moves to ensure smooth transitions.<br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ IT Equipment Shifting <br />
                                ✅  File & Furniture Handling <br />
                                ✅ Quick Setup at New Office
                            </span>
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="bg-white p-6 flex flex-col items-center text-center h-full">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-24.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            3. Local Shifting Services
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Need to shift within Ranchi, Deoghar, or nearby towns? Our local packers and movers ensure same-day service, affordable pricing, and full support. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ Local Experts <br />
                                ✅ Quick Transport <br />
                                ✅ Economical Pricing
                            </span>
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="bg-slate-200 p-6 flex flex-col items-center text-center h-full">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-27.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            4. Intercity & Interstate Relocation
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Relocate to any part of India with our long-distance moving service. We cover all major cities with guaranteed delivery timelines. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ GPS Tracking <br />
                                ✅ Insured Shipments <br />
                                ✅ Pan-India Network
                            </span>
                        </p>
                    </div>

                </div>


                {/* Cards Section 2*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-3">

                    {/* Card 1 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="bg-lime-50 p-6 flex flex-col items-center text-center h-auto">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-23.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            5. Car & Bike Transportation
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Get your car or two-wheeler transported safely across cities using our closed or open carriers. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ Secure Loading <br />
                                ✅ On-Time Delivery <br />
                                ✅ All India Coverage
                            </span>
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="bg-white p-6 flex flex-col items-center text-center h-auto">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-25.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            6. Warehouse & Storage Solutions
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Looking for short or long-term storage in Jharkhand? Our secure warehouses provide safe, clean, and CCTV-monitored storage at flexible rates. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ Climate-Controlled Units <br />
                                ✅ 24×7 Surveillance <br />
                                ✅ Easy Access
                            </span>
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className="bg-red-100 p-6 flex flex-col items-center text-center h-full">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-24.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            7. Loading & Unloading Services
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Need help loading or unloading rented trucks? Hire our trained laborers for hourly or full-day services. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ Skilled Manpower <br />
                                ✅ Equipment Handling <br />
                                ✅ Hour-Based Pricing
                            </span>
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className="bg-olive-100 p-6 flex flex-col items-center text-center h-full">
                        <img src="https://sakaldeorelocation.com/wp-content/uploads/2023/01/pic-27.png" className="w-16 mb-2" />
                        <h6 className="font-bold text-base mb-2">
                            8. Packing & Unpacking Services
                        </h6>
                        <p className="text-sm text-gray-600 mb-3">
                            Don’t want to lift a finger? Our standalone packing/unpacking services come with top-quality materials and expert handling. <br />
                            <span className="text-black flex items-start text-left mt-2 leading-5">
                                ✅ Fragile Items Handling <br />
                                ✅ Cartons, Bubble Wrap, Tapes <br />
                                ✅ Organized Unpacking
                            </span>
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}