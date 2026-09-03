import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: "",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await API.get(`/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
                alert("Failed to load product.");
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.put(`/products/${id}`, product);

            alert("✅ Product Updated Successfully");

            navigate("/products");
        } catch (error) {
            console.error(error);
            alert("❌ Failed to update product");
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Edit Product</h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "400px",
                    gap: "15px",
                }}
            >
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                />

                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />

                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />

                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                />

                <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    required
                />

                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                />

                <button type="submit">
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default EditProduct;