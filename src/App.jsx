import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import DashboardPage from "./pages/admin/dashboard";
import ProductPage from "./pages/admin/product";
import { Route, Routes } from "react-router-dom";
import {
    addProduct,
    getProducts,
    removeProductById,
    updateProduct,
} from "./api/product";
import { ToastContainer, toast } from "react-toastify";
import ProductAddPage from "./pages/admin/product-add";
import ProductEditPage from "./pages/admin/product-edit";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ProductPageWebsite from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Content from "./components/website/Content";
import ProductEx from "./pages/ProductEx";
import AccountPage from "./pages/admin/account";
import { getAccounts, removeAccountById } from "./api/account";

function App() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const data = await getAccounts();
            setUsers(data);
        })();
    }, []);

    const onHandleRemove = async (id) => {
        const confirm = window.confirm("Bạn chắc chưa ?");
        if (confirm) {
            try {
                await removeProductById(id);
                toast.success("Xoá sản phẩm thành công!");
                setProducts(products.filter((product) => product.id !== id));
            } catch (error) {
                toast.error("Xoá sản phẩm không thành công!");
            }
        }
    };

    const onHandleRemoveUser = async (id) => {
        const confirm = window.confirm("Bạn chắc chưa ?");
        if (confirm) {
            try {
                await removeAccountById(id);
                toast.success("Xoá người dùng thành công!");
                setUsers(users.filter((user) => user.id !== id));
            } catch (error) {
                toast.error("Xoá người dùng không thành công!");
            }
        }
    };

    const onHandleAdd = async (product) => {
        try {
            const data = await addProduct(product);
            toast.success("Thêm sản phẩm thành công !");
            setProducts([...products, data]);
        } catch (error) {
            toast.error(error);
        }
    };

    const onHandleUpdate = async (product) => {
        try {
            await updateProduct(product);
            toast.success("Cập nhật sản phẩm thành công !");
            const newProducts = products.map((item) => {
                return item.id === product.id ? product : item;
            });
            setProducts(newProducts);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<Content />} />
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route
                        path="products"
                        // element={<ProductPageWebsite products={products} />}
                        element={<ProductEx products={products} />}
                    />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="sign-in" element={<SignIn />} />
                </Route>

                <Route path="admin" element={<LayoutAdmin />}>
                    <Route
                        index
                        element={<DashboardPage products={products} />}
                    />
                    <Route
                        path="products"
                        element={
                            <ProductPage
                                products={products}
                                onRemove={onHandleRemove}
                            />
                        }
                    />
                    <Route
                        path="products/add"
                        element={<ProductAddPage onAdd={onHandleAdd} />}
                    />
                    <Route
                        path="products/:id/edit"
                        element={<ProductEditPage onUpdate={onHandleUpdate} />}
                    />
                    <Route
                        path="accounts"
                        element={
                            <AccountPage
                                users={users}
                                onRemove={onHandleRemoveUser}
                            />
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
