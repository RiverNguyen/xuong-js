import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

const SignIn = () => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post(
                `http://localhost:3000/signin`,
                formData
            );
            localStorage.setItem("user", JSON.stringify(data));
            toast.success("Đăng nhập thành công!");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log("Error:", error.response.data);
            toast.error("Vui lòng kiểm tra lại tài khoản hoặc mật khẩu!");
        }
    };

    const closeOverlay = () => {
        setIsOverlayVisible(false);
    };

    return (
        <>
            <Link to="#" onClick={toggleOverlay}>
                Đăng nhập
            </Link>

            {isOverlayVisible && (
                <div className="overlay" onClick={closeOverlay}>
                    <div
                        className="form"
                        id="form"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="d-flex align-items-center container justify-content-center">
                            <div>
                                <main className="form-signin w-100 m-auto">
                                    <div className="form-container sign-in">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <h1 className="text-dark header-form">
                                                Đăng nhập
                                            </h1>
                                            <div className="social-icons">
                                                <a href="#" className="icon">
                                                    <i className="fa-brands fa-google-plus-g" />
                                                </a>
                                                <a href="#" className="icon">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                                <a href="#" className="icon">
                                                    <i className="fa-brands fa-github" />
                                                </a>
                                                <a href="#" className="icon">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </div>
                                            <span className="text-dark">
                                                hoặc sử dụng tài khoản của bạn
                                            </span>
                                            <input
                                                className="form-control mt-4"
                                                type="email"
                                                placeholder="Email..."
                                                {...register("email", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.email && (
                                                <span className="text-danger">
                                                    *Không biết nhập email à ?
                                                </span>
                                            )}
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Mật khẩu..."
                                                {...register("password", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.password && (
                                                <span className="text-danger">
                                                    *Không biết nhập mật khẩu à
                                                    ?
                                                </span>
                                            )}
                                            <a href="#">Quên mật khẩu ?</a>
                                            <button>Đăng nhập</button>
                                        </form>
                                    </div>
                                    <div className="toggle-container">
                                        <div className="toggle">
                                            <div className="toggle-panel toggle-right">
                                                <h1 className="header-form">
                                                    Xin Chào
                                                </h1>
                                                <p style={{ fontSize: 16 }}>
                                                    Chúng tôi vô cùng vui mừng
                                                    khi được chào đón bạn quay
                                                    trở lại cửa hàng của chúng
                                                    tôi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignIn;
