import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const ProductEx = ({ products }) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 prd1-left hidden-xs hidden-sm">
                        <div className="row left-type g-first-aside">
                            <ul className="nav nav-tabs ms-3" role="tablist">
                                <li role="presentation" data-id="men,women">
                                    <a
                                        style={{ color: "black" }}
                                        href="#all"
                                        aria-controls="home"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        TẤT CẢ
                                    </a>
                                </li>
                                <li
                                    role="presentation"
                                    className="type-divider"
                                />
                                <li role="presentation" data-id="men">
                                    <a
                                        href="#men"
                                        aria-controls="profile"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        NAM
                                    </a>
                                </li>
                                <li
                                    role="presentation"
                                    className="type-divider"
                                />
                                <li data-id="women" role="presentation">
                                    <a
                                        href="#women"
                                        aria-controls="profile"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        NỮ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row left-divider" />
                        <ul className="nav flex-column mx-1 nav-list">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="#"
                                >
                                    Accessories | Phụ kiện
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Footwear | Lên chân
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Top | Nửa trên
                                </a>
                            </li>
                        </ul>
                        <div className="row left-divider" />
                        <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        TRẠNG THÁI
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <ul className="nav flex-column mx-1 nav-list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Limited Edition
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Online Only
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Sale off
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                New Arrival
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                        <div className="accordion accordion-flush" id="list-2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#list-second"
                                        aria-expanded="false"
                                        aria-controls="list-second"
                                    >
                                        KIỂU DÁNG
                                    </button>
                                </h2>
                                <div
                                    id="list-second"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#list-2"
                                >
                                    <ul className="nav flex-column mx-1 nav-list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Low Top
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                High Top
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Slip-on
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Mid Top
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Mule
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                        <div className="accordion accordion-flush" id="list-2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#list-3"
                                        aria-expanded="false"
                                        aria-controls="list-3"
                                    >
                                        DÒNG SẢN PHẨM
                                    </button>
                                </h2>
                                <div
                                    id="list-3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#list-2"
                                >
                                    <ul className="nav flex-column mx-1 nav-list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Basas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Vintas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Urban
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Pattas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Tote Bag
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Graphic Tee
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Hoodie
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Sweatshirt
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Socks | Vớ
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Hat
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Track 6
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Basic Tee
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Shoelaces
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                        <div className="accordion accordion-flush" id="list-2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#list-4"
                                        aria-expanded="false"
                                        aria-controls="list-4"
                                    >
                                        GIÁ
                                    </button>
                                </h2>
                                <div
                                    id="list-4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#list-2"
                                >
                                    <ul className="nav flex-column mx-1 nav-list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                aria-current="page"
                                                href="#"
                                            >
                                                500k - 599k
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                &gt; 600k
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                400k - 499k
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                300k - 399k
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                200k - 299k
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                &lt; 200k
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                        <div className="accordion accordion-flush" id="list-2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#list-5"
                                        aria-expanded="false"
                                        aria-controls="list-5"
                                    >
                                        BỘ SƯU TẬP
                                    </button>
                                </h2>
                                <div
                                    id="list-5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#list-2"
                                >
                                    <ul className="nav flex-column mx-1 nav-list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Ananas Puppet Club
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Track 6 2.Blues
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Ananas Outline Typo
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Est. '17 Ananas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Discover Ananas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Jazico
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Track 6 I.S.E.E
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Soda Pop
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Landforms
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                SC
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Ananas "Copy" Store Bag
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Workaday
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Evergreen
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                RAW
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Polka Dots
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Living Journey
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Retrospective
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Aunter
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Monoguso
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Ruler
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Love+
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Temperate
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Ananas x Doraemon 50 Years
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Irrelevant
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                        <div className="accordion accordion-flush" id="list-2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#list-6"
                                        aria-expanded="false"
                                        aria-controls="list-6"
                                    >
                                        CHẤT LIỆU
                                    </button>
                                </h2>
                                <div
                                    id="list-6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#list-2"
                                >
                                    <ul className="nav flex-column mx-1 nav-list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Canvas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Sudue | Da lộn
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Leather | Da
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Cotton
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Flannel
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Acrylic
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Corduroy
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Polyester
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                        <div className="accordion accordion-flush" id="list-2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#list-7"
                                        aria-expanded="false"
                                        aria-controls="list-7"
                                    >
                                        MÀU
                                    </button>
                                </h2>
                                <div
                                    id="list-7"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#list-2"
                                >
                                    <ul
                                        className="nav tree"
                                        style={{ display: "block" }}
                                    >
                                        <li className="cb-color"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nav-divider" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 prd1-right">
                        <div className="row prd1-right-box hidden-xs hidden-sm">
                            <img src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg" />
                        </div>
                        <div className="row prd1-right-items">
                            {products.map((product, index) => {
                                const formattedPrice = new Intl.NumberFormat(
                                    "vi-VN",
                                    { style: "currency", currency: "VND" }
                                ).format(product.price);

                                return (
                                    <React.Fragment key={index}>
                                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                            <div className="big-item">
                                                <div className="img-item">
                                                    <Link
                                                        to={`/products/${product.id}`}
                                                    >
                                                        <img
                                                            className="inormal"
                                                            src={
                                                                product.image[0]
                                                            }
                                                        />
                                                        <img
                                                            className="ihover"
                                                            src={
                                                                product.image[1]
                                                            }
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="button">
                                                    <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                                        MUA NGAY
                                                    </div>
                                                </div>
                                                <div className="caption text-center">
                                                    <h3 className="type">
                                                        New Arrival
                                                    </h3>
                                                    <h3 className="divider" />
                                                    <h3 className="name">
                                                        <Link
                                                            to={`/products/${product.id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                    <h3 className="color">
                                                        {product.description}
                                                    </h3>
                                                    <h3 className="price">
                                                        {formattedPrice}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}

                            {/* <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Bluewash</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Navy Blue</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Urbas Corluray Mix - High Top
                                        </h3>
                                        <h3 className="color">Corluray Mix</h3>
                                        <h3 className="price">650.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Bluewash</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Navy Blue</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Urbas Corluray Mix - High Top
                                        </h3>
                                        <h3 className="color">Corluray Mix</h3>
                                        <h3 className="price">650.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Bluewash</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductEx;
