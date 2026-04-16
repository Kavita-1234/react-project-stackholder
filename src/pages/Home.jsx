import React from "react";
import HomePageSectionOne from "./home/HomePageSectionOne";
import HomePageSectionTwo from "./home/HomePageSectionTwo";
import HomePageSectionThree from "./home/HomePageSectionThree";
import HomePageSectionFour from "./home/HomePageSectionFour";
import HomePageSectionFive from "./home/HomePageSectionFive";
import HomePageSectionSix from "./home/HomePageSectionSix";
import HomePageSectionSeven from "./home/HomePageSectionSeven";
import HomePageSection from "./home/HomePageSection";

export default function Home() {
    return (
        <>
            <HomePageSectionOne />
            <HomePageSection />
            <HomePageSectionTwo />
            <HomePageSectionThree />
            <HomePageSectionFour />
            <HomePageSectionFive />
            <HomePageSectionSix />
            <HomePageSectionSeven />
        </>
    );
}