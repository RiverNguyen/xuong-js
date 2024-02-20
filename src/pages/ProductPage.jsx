import React from "react";
import { Link } from "react-router-dom";

const ProductPageWebsite = ({ products }) => {
    return (
        <div>
            <div className="container text-center justify-between">
                <div className="row d-plex">
                    {products.map((product, index) => {
                        return (
                            <>
                                <div className="col-md-4 border" key={index}>
                                    <img
                                        src={product.image[0]}
                                        height={400}
                                        alt={product.name}
                                    />
                                    <span>
                                        <Link to={`/products/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </span>
                                    <h4 className="text-danger">
                                        Giá: {product.price} Đ
                                    </h4>
                                    <p>Mô tả: {product.description}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductPageWebsite;
