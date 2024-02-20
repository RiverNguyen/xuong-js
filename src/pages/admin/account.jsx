import React, { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const AccountPage = ({ users, onRemove }) => {
    const data = users;

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Tên",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
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
                <h1 className="h2">Quản lý người dùng</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            to="/admin/users/add"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Thêm
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <DataTable
                    columns={columns}
                    data={data}
                    title="Danh sách người dùng"
                    pagination
                    striped
                    highlightOnHover
                />
            </div>
        </>
    );
};

export default AccountPage;
