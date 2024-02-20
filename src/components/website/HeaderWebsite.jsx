import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import BannerImg from "./BannerImg";
import Banner from "./Banner";

const HeaderWebsite = () => {
    return (
        <div>
            <HeaderMenu />
            <header className="d-flex flex-wrap align-items-end justify-content-evenly py-3 border-bottom ">
                <div className="col-md-1 mb-2 mb-md-0">
                    <Link
                        to={"/"}
                        className="d-inline-flex link-body-emphasis text-decoration-none"
                    >
                        <img
                            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <ul className="nav col-md-6 mb-2 justify-content-center mb-md-0 nav-header">
                    <li className="dropdown">
                        <Link to={"/products"} className="px-2 text-dark">
                            SẢN PHẨM
                        </Link>
                    </li>
                    <li className="line"></li>
                    <li className="dropdown">
                        <Link href="#" className="px-2 text-dark">
                            NAM
                        </Link>
                    </li>
                    <li className="line"></li>
                    <li className="dropdown">
                        <Link href="#" className="px-2 text-dark">
                            NỮ
                        </Link>
                    </li>
                    <li className="line"></li>
                    <li className="dropdown">
                        <Link href="#" className="px-2 text-dark">
                            SALE OFF
                        </Link>
                    </li>
                    <li className="line"></li>
                    <li className="dropdown">
                        <Link href="#" className="px-2 text-dark">
                            <img
                                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg"
                                alt=""
                            />
                        </Link>
                    </li>
                </ul>
                <form className="col-12 col-lg-auto mb-4 me-lg-3" role="search">
                    <input
                        type="search"
                        className="form-control text-bg"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </header>
            <Banner />
        </div>
    );
};

export default HeaderWebsite;
