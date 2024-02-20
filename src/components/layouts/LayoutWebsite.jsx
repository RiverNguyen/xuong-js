import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "../website/HeaderMenu";
import HeaderWebsite from "../website/HeaderWebsite";
import Footer from "../website/Footer";
import Banner from "../website/Banner";
import Content from "../website/Content";

const LayoutWebsite = () => {
    return (
        <div>
            <div className="">
                <HeaderWebsite />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default LayoutWebsite;
