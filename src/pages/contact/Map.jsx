import React from "react";

export default function Map() {
    return (
        <section id="contact">
            <div className="w-full md:mt-3">
                {/* Map */}
                <iframe
                    className="w-full md:max-w-auto h-[300px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.548397164665!2d75.78727057519544!3d26.912433776664556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d7f3dfd4b7%3A0x7c9b32b1e5b9d9c!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1732119828291!5m2!1sen!2sin"
                    loading="lazy"
                ></iframe>
            </div>

        </section>
    );
}