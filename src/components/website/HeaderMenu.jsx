import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

const HeaderMenu = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <ul className="menu">
                        <li>
                            <Link>
                                <i
                                    className="fa-solid fa-heart"
                                    style={{ color: "#fff" }}
                                ></i>
                                <span>Yêu thích</span>
                            </Link>
                        </li>
                        <li>
                            <>
                                <i
                                    className="fa-solid fa-user"
                                    style={{ color: "#fff" }}
                                ></i>
                                <span>{<SignIn />}</span>
                            </>
                        </li>
                        <li>
                            <>
                                <i
                                    className="fa-solid fa-user-plus"
                                    style={{ color: "#fff" }}
                                ></i>
                                <span>{<SignUp />}</span>
                            </>
                        </li>
                        <li>
                            <Link to="">
                                <i
                                    className="fa-solid fa-cart-plus"
                                    style={{ color: "#fff" }}
                                ></i>
                                <span>Giỏ hàng</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin">
                                <i
                                    className="fa-solid fa-user-secret"
                                    style={{ color: "#fff" }}
                                ></i>
                                <span>Admin</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderMenu;
