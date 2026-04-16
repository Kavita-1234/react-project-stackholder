import React from "react";
import { FaEnvelope, FaPhone, FaMap } from "react-icons/fa"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export default function HomePageSectionSeven() {
    return (
        <section id="home">
            <div className="max-w-6xl mx-auto bg-slate-900 py-16 px-6">

                {/* Main Container */}
                <div className="flex flex-col md:flex-row items-center gap-10">

                    {/* LEFT TEXT (Center aligned vertically) */}
                    <div className="md:w-1/2 w-full flex items-center">

                        <div className="text-left space-y-3">
                            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                                Schedule Your Appointment Today
                            </h1>

                            <p className="text-white text-sm leading-relaxed">
                                Need{" "}
                                <span className="text-white font-bold">packers and movers in ranchi and near you</span>
                                ? We offer fast,
                                affordable, and reliable relocation services. From packing to delivery,
                                we handle it all with care.{" "}
                                <span className="text-white font-bold">Schedule your appointment today</span> 
                                {" "}and move
                                stress-free. Call now for a free quote!
                            </p>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full md:w-1/2 text-white space-y-6">

                        {/* Contact Info Row */}
                        <div className="text-left flex flex-col md:flex-row gap-6">

                            {/* Ranchi */}
                            <div className="text-left flex-1">
                                <h2 className="text-white font-bold mb-2">Ranchi</h2>
                                <ul className="text-left space-y-2 text-sm">
                                    <li className="text-left flex items-start gap-2">
                                        <FaPhone className="text-left text-red-500 mt-1" />
                                        +91 9031470777
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaEnvelope className="text-red-500 mt-1" />
                                        info@sakaldeorelocation.com
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaMap className="text-red-500 mt-1" />
                                        Ranchi, Jharkhand
                                    </li>
                                </ul>
                            </div>

                            {/* Deoghar */}
                            <div className="flex-1">
                                <h2 className="text-white font-bold mb-2">Deoghar</h2>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <FaPhone className="text-red-500 mt-1" />
                                        +99393 00224
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaEnvelope className="text-red-500 mt-1" />
                                        sachinmahtha1998@gmail.com
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaMap className="text-red-500 mt-1" />
                                        Deoghar, Jharkhand
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* Form */}
                        <Form className="space-y-3">
                            <Form.Group controlId="formGroupMobile">
                                <Form.Label className="text-white">Mobile*</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group controlId="formGroupName">
                                <Form.Label className="text-white">Name*</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group controlId="formGroupMovingDate">
                                <Form.Label className="text-white">Moving Date*</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Button variant="danger" className="w-full">
                                Book Now
                            </Button>
                        </Form>

                    </div>

                </div>
            </div>
        </section>
    );
}