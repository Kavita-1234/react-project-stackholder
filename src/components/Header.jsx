import React from 'react';
import logo from "../assets/images/logo.jpg";
import "../App.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">

                {/* Logo Section */}
                <div className="logo-section">
                    <img src={logo} alt="Logo" className="logo" />

                </div>

                {/* Contact Section */}
                <div className="contact-section">

                    {/* Phone */}
                    <div className="contact-box">
                        <span className="icon phone-icon">📞</span>
                        <div className="contact-info">
                            <h4 className="title">Book Your Shift</h4>
                            <p className="highlight">
                                <a href="tel:+919939300224">9939300224</a>
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="contact-box">
                        <span className="icon location-icon">📍</span>
                        <div className="location-info">
                            <h5 className="title">Our Location</h5>
                            <p>Ranchi | Deoghar (JH)</p>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    );
}