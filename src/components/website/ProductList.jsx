import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    return (
        <div className="row mt-5">
            <h3 className="fw-bold text-center mb-5">DANH MỤC MUA HÀNG</h3>
            <div className="col-lg-4">
                <div className="item-bg">
                    <div className="black-bg"></div>
                    <img
                        src="https://ananas.vn/wp-content/uploads/catalogy-1.jpg"
                        alt=""
                    />
                    <div className="item-group d-flex flex-column align-items-center justify-content-center">
                        <Link className="title">Giày Nam</Link>
                        <Link className="sub">New Arrivals</Link>
                        <Link className="sub">Best Seller</Link>
                        <Link className="sub">Sale-off</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="item-bg">
                    <div className="black-bg"></div>
                    <img
                        src="https://ananas.vn/wp-content/uploads/catalogy-2.jpg"
                        alt=""
                    />
                    <div className="item-group d-flex flex-column align-items-center justify-content-center">
                        <Link className="title">Giày Nam</Link>
                        <Link className="sub">New Arrivals</Link>
                        <Link className="sub">Best Seller</Link>
                        <Link className="sub">Sale-off</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="item-bg">
                    <div className="black-bg"></div>
                    <img
                        src="https://ananas.vn/wp-content/uploads/catalogy-3.jpg"
                        alt=""
                    />
                    <div className="item-group d-flex flex-column align-items-center justify-content-center">
                        <Link className="title">Giày Nam</Link>
                        <Link className="sub">New Arrivals</Link>
                        <Link className="sub">Best Seller</Link>
                        <Link className="sub">Sale-off</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
