import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await API.get("/products");
                setProducts(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {
            await API.delete(`/products/${id}`);

            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== id)
            );

            alert("✅ Product Deleted Successfully");
        } catch (error) {
            console.error(error);
            alert("❌ Failed to Delete Product");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1 className="page-title">Products</h1>

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product._id} className="card">
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        marginBottom: "15px",
                                    }}
                                />
                            )}
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ₹{product.price}</p>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Stock:</strong> {product.stock}</p>

                            <button
                                onClick={() => navigate(`/edit/${product._id}`)}
                                className="btn edit-btn"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteProduct(product._id)}
                                className="btn delete-btn"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;