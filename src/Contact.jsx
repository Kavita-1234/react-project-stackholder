import React from "react";
import ContactOne from "./pages/contact/ContactHero";
import ContactForm from "./pages/contact/ContactForm";
import Map from "./pages/contact/Map";
import TextSection from "./pages/contact/TextSection";

export default function Contact(){
    return(
        <>
        <ContactOne />
        <ContactForm />
        <Map />
        <TextSection />
        </>
    );
}
