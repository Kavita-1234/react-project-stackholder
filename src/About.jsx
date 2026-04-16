import React from "react";
import AboutHero from "./pages/about/AboutHero";
import ServiceOne from "./pages/about/Experience";
import ServiceTwo from "./pages/about/Reasons";
import ServiceThree from "./pages/about/AboutRelocation";
import RedSection from "./pages/about/RedSection";

export default function About(){
    return(
        <>
        <AboutHero />
        <ServiceOne />
        <ServiceTwo />
        <ServiceThree />
        <RedSection />
        </>
    );
}