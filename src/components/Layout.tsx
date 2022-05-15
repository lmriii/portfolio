import React from "react";
import Navigation from "./Navbar";
import MainSection from "./MainSection";
import Footer from "./Footer";


export default function Layout() {
    return (
        <>
            <div id="body" className="is-preload">
                <Navigation />
                <div id="wrapper">

                    <MainSection />

                    <Footer />
                </div>
            </div>
        </>
    )
}