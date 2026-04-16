import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Form from 'react-bootstrap/Form';


export default function ContactForm() {
    return (
        <div className="max-w-6xl mx-auto bg-white overflow-hidden">

            {/* Main Container */}
            <div className="flex flex-wrap flex-col md:flex-row mt-10">

                {/* LEFT TEXT */}
                <div className="md:w-1/2 text-white items-start text-left px-4 sm:px-8 md:px-12 lg:px-20 pl-10">

                    <h1 className="ml-20 mt-4 text-black text-3xl md:text-5xl font-extrabold leading-snug">
                        Contact Us Now!
                    </h1>

                    <p className="mt-3 text-gray-500 text-base">
                        Certainly elsewhere my do allowance at. The address farther six hearted hundred towards husband. Are securing off occasion remember.
                    </p>

                    <h5 className="text-black font-bold mt-3 text-xl">
                        Main Office Ranchi
                    </h5>

                    <div className="flex items-center gap-2 mb-0.5">
                        <FaPhoneAlt className="text-xs text-red-600" />
                        <p className="text-base text-gray-500">+91-97987 62073</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                        <FaEnvelope className="text-xs text-red-600" />
                        <p className="text-base text-gray-500">info@sakaldeorelocation.com</p>
                    </div>

                    <h5 className="text-black font-bold mt-3 text-xl">
                        Deoghar
                    </h5>

                    <div className="flex items-center gap-2 mb-3">
                        <FaPhoneAlt className="text-xs text-red-600" />
                        <p className="text-base text-gray-500">+19-99393 00224</p>
                    </div>

                </div>
                <div className="w-full md:w-1/2 px-4 md:px0">

                    <Form className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">

                        {/* Name */}
                        <Form.Group className="mb-4 text-gray-700">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </Form.Group>

                        {/* Mobile */}
                        <Form.Group className="mb-4 text-gray-700">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </Form.Group>

                        {/* Textarea (BIGGER) */}
                        <Form.Group className="mb-4 text-gray-700">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}   // 👈 THIS MAKES IT BIGGER
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </Form.Group>

                        {/* Button */}
                        <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition">
                            Send
                        </button>

                    </Form>

                </div>
            </div>
        </div>
    );
}