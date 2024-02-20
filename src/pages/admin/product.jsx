import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const ProductPage = ({ products, onRemove }) => {
    const data = products;

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

    const formatPrice = (price) => {
        const formattedPrice = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(Number(price));
        return formattedPrice;
    };

    const [records, setRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const newData = data.filter((row) => {
            const nameMatches = row.name.toLowerCase().includes(searchTerm);
            const priceMatches = formatPrice(row.price)
                .toLowerCase()
                .includes(searchTerm);

            return nameMatches || priceMatches;
        });

        setRecords(newData);
    }, [data, searchTerm]);

    const handleFilter = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Ảnh",
            selector: (row) => row.image[0],
            cell: (row) => (
                <img
                    src={row.image[0]}
                    alt="Ảnh sản phẩm"
                    style={{ width: "160px", height: "160px" }}
                />
            ),
        },
        {
            name: "Tên sản phẩm",
            selector: (row) => row.name,
        },
        {
            name: "Danh mục",
            selector: (row) => getCategoryName(row.category),
        },
        {
            name: "Giá",
            selector: (row) => row.price,
            sortable: true,
            cell: (row) => formatPrice(row.price),
        },
        {
            name: "Mô tả",
            selector: (row) => row.description,
        },
        {
            name: "",
            cell: (row) => (
                <div className="d-flex">
                    <button
                        className="btn btn-danger"
                        onClick={() => onRemove(row.id)}
                    >
                        Xoá
                    </button>
                    <Link
                        to={`/admin/products/${row.id}/edit`}
                        className="btn btn-primary ms-3"
                    >
                        Cập nhật
                    </Link>
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            to="/admin/products/add"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Thêm
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-end">
                    <input type="text" onChange={handleFilter} />
                </div>
                <DataTable
                    columns={columns}
                    data={records}
                    title="Danh sách sản phẩm"
                    pagination
                    paginationPerPage={5}
                    striped
                    highlightOnHover
                />
            </div>
        </>
    );
};

export default ProductPage;
