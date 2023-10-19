import React from 'react';
import TopNav from "../Frame/components/TopNav";
import {useLocation} from "react-router-dom";
import Banner from "./components/Banner";
import Header from "../Frame/components/Header";
import GapHeader from "../Frame/components/GapHeader";

function Home() {
    const { state } = useLocation();
    return (
        <div id="home">
            <TopNav/>
            <Header
                props={
                    state && (state.props.position || "guest")
                }
            />
            <GapHeader />
            <Banner />
        </div>
    );
}

export default Home;