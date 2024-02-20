import React from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div>
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <SideBar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;
