import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/product";
import axios from "axios";

const ProductEditPage = ({ onUpdate }) => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [imagePreviews, setImagePreviews] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            reset(data);
            loadImages(data.image);
        })();
    }, [id]);

    const onSubmit = async (data) => {
        if (data.image && data.image.length > 0) {
            const uploadedUrls = await uploadFile(Array.from(data.image));
            data.image = uploadedUrls;
        } else {
            delete data.image;
        }
        onUpdate(data);
        navigate("/admin/products");
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files) {
            imagePreviews.forEach((preview) =>
                URL.revokeObjectURL(preview.url)
            );

            const previews = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            );
            setImagePreviews(
                previews.map((url, index) => ({ id: index, url }))
            );
        }
    };

    const uploadFile = async (files) => {
        if (files) {
            const CLOUD_NAME = "dfykg7wtt";
            const PRESET_NAME = "assignment-ecma";
            const FOLDER_NAME = "assignment-ecma";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                urls.push(response.data.secure_url);
            }
            return urls;
        }
    };

    const loadImages = (images) => {
        if (images && images.length > 0) {
            const previews = images.map((url, index) => ({
                id: index,
                url,
            }));
            setImagePreviews(previews);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Cập nhật sản phẩm</h1>
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="productCategory" className="form-label">
                        Danh mục:
                    </label>

                    <select
                        {...register("category")}
                        className="form-control"
                        id="productCategory"
                    >
                        <option value="1">Giày</option>
                        <option value="2">Túi</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                        Tên sản phẩm:
                    </label>
                    <input
                        type="text"
                        id="productName"
                        className="form-control"
                        {...register("name")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">
                        Ảnh:
                    </label>
                    <input
                        type="file"
                        id="productImage"
                        multiple
                        className="form-control"
                        {...register("image")}
                        onChange={handleImageChange}
                    />

                    {imagePreviews.length > 0 && (
                        <div>
                            {imagePreviews.map((preview) => (
                                <img
                                    key={preview.id}
                                    src={preview.url}
                                    className="img-thumbnail my-3 mx-3"
                                    alt={`Xem trước`}
                                    style={{
                                        maxWidth: "300px",
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                        Giá:
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        className="form-control"
                        {...register("price")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDesc" className="form-label">
                        Mô tả sản phẩm:
                    </label>
                    <textarea
                        className="form-control"
                        id="productDesc"
                        cols="30"
                        rows="10"
                        {...register("description")}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Cập nhật
                </button>
            </form>
        </>
    );
};

export default ProductEditPage;
