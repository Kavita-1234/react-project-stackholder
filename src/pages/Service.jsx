import React from "react";
import ServiceOne from "./service/ServiceHero";
import ServiceTwo from "./service/Relocation";
import ServiceThree from "./service/AppointementSection";
import ServiceFour from "./service/WhyChooseUs";
// import ServiceFive from "./service/FeedbackSection";
import ServiceSix from "./service/FaqSection"
import ServiceSeven from "./service/Quote";
import ServiceEight from "./service/Location";

export default function Service(){
    return(
        <>
        <ServiceOne />
        <ServiceTwo />
        <ServiceThree />
        <ServiceFour />
        {/* <ServiceFive /> */}
        <ServiceSix />
        <ServiceSeven />
        <ServiceEight />
        </>
    );
}