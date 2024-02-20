import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const DashboardPage = ({ products }) => {
    const shoes = products.filter((product) => product.category === "1");

    const bags = products.filter((product) => product.category === "2");

    const totalShoesMoney = shoes.reduce((total, product) => {
        return total + parseInt(product.price, 10);
    }, 0);

    const totalBagsMoney = bags.reduce((total, product) => {
        return total + parseInt(product.price, 10);
    }, 0);

    const totalBags = bags.length;
    const totalShoes = shoes.length;

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Admin</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            <div className="row d-flex align-items-center justify-content-center ms-5 mt-5">
                <div className="col-lg-5 shadow rounded">
                    <Bar
                        className="m-auto p-3"
                        data={{
                            labels: ["Giày", "Túi"],
                            datasets: [
                                {
                                    label: "VND",
                                    data: [totalShoesMoney, totalBagsMoney],
                                    backgroundColor: ["#d62828", "#f77f00"],
                                    borderRadius: 10,
                                },
                            ],
                        }}
                        style={{ height: 300 }}
                    />
                </div>
                <div className="col-lg-5 shadow rounded ms-5">
                    <Doughnut
                        className="m-auto p-3"
                        data={{
                            labels: ["Giày", "Túi"],
                            datasets: [
                                {
                                    label: "Số lượng",
                                    data: [totalShoes, totalBags],
                                    backgroundColor: ["#d62828", "#f77f00"],
                                    borderRadius: 10,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
