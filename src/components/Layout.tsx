import React from "react";
import Navigation from "./Navbar";
import { Routes, Route } from 'react-router-dom';
import MainSection from "./MainSection";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <div id="body" className="is-preload">

                <Navigation />
                <Routes>
                    <Route path='/' element={<MainSection />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}