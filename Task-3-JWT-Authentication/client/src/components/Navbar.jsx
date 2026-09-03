import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const userInfo = localStorage.getItem("userInfo");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/login");
    };

    return (
        <nav>
            <div className="container" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {userInfo && <Link to="/add-product">Add Product</Link>}
                
                <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
                    {userInfo ? (
                        <>
                            <span>Welcome, {JSON.parse(userInfo).name}</span>
                            <button onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;