import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            setProduct(data);
        })();
    }, [id]);

    const formatPrice = (price) => {
        const formattedPrice = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(Number(price));
        return formattedPrice;
    };

    const getCategoryName = (category) => {
        switch (category) {
            case "1":
                return "Giày";
            case "2":
                return "Túi";
            default:
                return "Không xác định";
        }
    };

    return (
        <div className="prd-detail container my-3">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 hidden-xs hidden-sm">
                    <ol className="breadcrumb">
                        <li>
                            <a>{getCategoryName(product.category)}</a>
                        </li>
                        <li>{"-"}</li>
                        <li className="active">{product.name}</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <Slider {...settings}>
                        {product.image?.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt="Ảnh sản phẩm"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 prd-detail-right">
                    <h4>Vintas Public 2000s - Low Top - Insignia Blue</h4>
                    <span className="me-5">
                        Tình trạng: <strong>New Arrival</strong>
                    </span>
                    <span className="ms-5">
                        Màu sắc: <strong>{product.description}</strong>
                    </span>
                    <h5 className="price">{formatPrice(product.price)}</h5>
                    <div className="divider"></div>
                    <div className="row mt-3">
                        <div className="size col-lg-6">
                            <h2>Size:</h2>
                            <select className="form-control" name="" id="">
                                <option value="" disabled selected>
                                    Chọn size
                                </option>
                                <option value="">39</option>
                                <option value="">40</option>
                                <option value="">41</option>
                                <option value="">42</option>
                                <option value="">43</option>
                            </select>
                        </div>
                        <div className="quality col-lg-6">
                            <h2>Số lượng:</h2>
                            <select className="form-control" name="" id="">
                                <option value="" disabled selected>
                                    Chọn số lượng
                                </option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="pr-button mt-5">
                        <button
                            to="/cart"
                            className="btn btn-primary w-100 add-cart"
                        >
                            Thêm vào giỏ hàng
                        </button>
                        <button
                            to="/cart"
                            className="btn btn-primary w-100 mt-4 buy-now"
                        >
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
