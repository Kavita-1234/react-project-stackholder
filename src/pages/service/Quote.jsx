import React from "react";
import "../../App.css";
import homePage from "../../assets/images/homepage.jpg";
import Form from 'react-bootstrap/Form';

export default function Quote() {
    return (
        <section
            id="service"
            className="flex items-center justify-center"
        >

            {/* Main Container */}
            <div className="bg-gradient-to-b from-red-600 to-black w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-12 py-10">

                {/* LEFT TEXT */}
                <div className="md:w-1/2 text-white">

                    <h1 className="mt-4 text-white text-3xl md:text-5xl font-extrabold leading-snug">
                        📞 Get a Free Quote Today!
                    </h1>

                    <p className="mt-3 text-white text-base md:text-lg leading-relaxed">
                        Call us at {" "}
                        <span className="text-blue-700 font-bold">
                            +91 99393-00224
                        </span>{" "}
                        or fill the form to get an instant moving estimate.
                    </p>

                </div>

                <div className="w-full md:w-1/2 px-4 md:px-0">

                    <Form className="w-full max-w-md mx-auto">

                        {/* Name */}
                        <Form.Group className="mb-4 text-white">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                className="w-full bg-slate-600 text-black "
                            />
                        </Form.Group>

                        {/* Mobile */}
                        <Form.Group className="mb-4 text-white">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                className="w-full bg-slate-600 text-black"
                            />
                        </Form.Group>

                        {/* Textarea */}
                        <Form.Group className="mb-4 text-white">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}   // 👈 THIS MAKES IT BIGGER
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </Form.Group>

                        {/* Button */}
                        <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-pink-500">
                            Book Now
                        </button>

                    </Form>

                </div>

            </div>
        </section>
    );
}