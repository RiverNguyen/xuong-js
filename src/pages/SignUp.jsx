import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./SignIn";

const SignUp = () => {
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

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/signup`,
                data
            );
            console.log(response);
            toast.success("Đăng ký thành công!");
            navigate("/");
        } catch (error) {
            console.log("error", error);
            toast.error("Đã xảy ra lỗi khi đăng ký");
        }
    };
    const closeOverlay = () => {
        setIsOverlayVisible(false);
    };
    return (
        <>
            <Link to="#" onClick={toggleOverlay}>
                Đăng ký
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
                                            <h1 className="text-dark header-form mt-3">
                                                Đăng ký
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
                                                để đăng ký
                                            </span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Họ tên..."
                                                {...register("name", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.name && (
                                                <alert className="text-danger">
                                                    *Không biết nhập tên à ?
                                                </alert>
                                            )}
                                            <input
                                                className="form-control"
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
                                            <button>Đăng Ký</button>
                                        </form>
                                    </div>
                                    <div className="toggle-container">
                                        <div className="toggle">
                                            <div className="toggle-panel toggle-right">
                                                <h1 className="header-form">
                                                    Xin Chào
                                                </h1>
                                                <p style={{ fontSize: 16 }}>
                                                    Đăng ký tài khoản để được
                                                    nhận thêm nhiều ưu đãi hấp
                                                    dẫn !
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
    // return (
    //     <div className="d-flex align-items-center py-4 container justify-content-center">
    //         <div>
    //             <main className="form-signin w-100 m-auto">
    //                 <form
    //                     className="custom-form-width"
    //                     onSubmit={handleSubmit(onSubmit)}
    //                 >
    //                     <img
    //                         className="mb-4 mx-auto d-block"
    //                         src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
    //                         width={100}
    //                         height={110}
    //                     />
    //                     <h1 className="h3 mb-3 fw-normal text-signup text-center">
    //                         Đăng ký
    //                     </h1>
    //                     <div className="form-floating">
    //                         <input
    //                             type="email"
    //                             name="email"
    //                             className="form-control"
    //                             id="floatingInput"
    //                             placeholder="name@example.com"
    //                             {...register("email", { required: true })}
    //                         />
    //                         {errors.email && (
    //                             <span className="text-danger">
    //                                 *Không biết nhập email à ?
    //                             </span>
    //                         )}
    //                         <label htmlFor="floatingInput">Email:</label>
    //                     </div>
    //                     <div className="form-floating">
    //                         <input
    //                             type="password"
    //                             className="form-control"
    //                             id="floatingPassword"
    //                             name="password"
    //                             placeholder="Password"
    //                             {...register("password", { required: true })}
    //                         />
    //                         {errors.password && (
    //                             <span className="text-danger">
    //                                 *Không biết nhập mật khẩu à ?
    //                             </span>
    //                         )}
    //                         <label htmlFor="floatingPassword">Mật khẩu</label>
    //                     </div>
    //                     <div className="form-check text-start my-3">
    //                         <input
    //                             className="form-check-input"
    //                             type="checkbox"
    //                             defaultValue="remember-me"
    //                             id="flexCheckDefault"
    //                         />
    //                         <label
    //                             className="form-check-label"
    //                             htmlFor="flexCheckDefault"
    //                         >
    //                             Nhớ tài khoản ?
    //                         </label>
    //                     </div>
    //                     <div className="mb-3">
    //                         <SignIn
    //                             to={"/sign-in"}
    //                             className="form-check-label"
    //                             htmlFor="flexCheckDefault"
    //                         ></SignIn>
    //                     </div>
    //                     <button
    //                         className="btn btn-primary w-100 py-2"
    //                         type="submit"
    //                     >
    //                         Đăng ký
    //                     </button>
    //                 </form>
    //             </main>
    //         </div>
    //     </div>
    // );
};

export default SignUp;
