import React from 'react';
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import GapHeader from "./components/GapHeader";

function FrameHeader({children}) {
    return (
        <div className="relative">
            <TopNav />
            <Header />
            <GapHeader />
            {children}
        </div>
    );
}

export default FrameHeader;