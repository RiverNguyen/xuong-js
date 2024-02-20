import React from "react";
import ProductList from "./ProductList";
import BannerImg from "./BannerImg";

const Content = () => {
    return (
        <>
            <BannerImg />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src="https://ananas.vn/wp-content/uploads/banner-phu%CC%A3_2m-600x320.jpg"
                            alt=""
                        />
                        <div className="content-text mt-5">
                            <h3 className="title">All Black In Black</h3>
                            <p className="description">
                                Mặc dù được ứng dụng rất nhiều, nhưng sắc đen
                                lúc nào cũng toát lên một vẻ huyền bí không nhàm
                                chán
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg"
                            alt=""
                            width={600}
                            height={320}
                        />
                        <div className="content-text mt-5">
                            <h3 className="title">OUTLET SALE</h3>
                            <p className="description">
                                Danh mục những sản phẩm bán tại "giá tốt hơn"
                                chỉ được bán kênh online - Online Only, chúng đã
                                từng làm mưa làm gió một thời gian và hiện đang
                                rơi vào tình trạng bể size, bể số
                            </p>
                        </div>
                    </div>
                </div>
                <ProductList />
            </div>
            <img
                style={{ width: "100%" }}
                className="mt-5"
                src="https://ananas.vn/wp-content/uploads/Banner_Clothing.jpg"
                alt=""
            />
        </>
    );
};

export default Content;
