import React from 'react';
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import GapHeader from "./components/GapHeader";
import Footer from "./components/Footer";

function FrameDefault({children}) {
    return (
        <div className="relative">
            <TopNav />
            <Header />
            <GapHeader />
            {children}
            <Footer />
        </div>
    );
}

export default FrameDefault;