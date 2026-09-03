import Products from "./Products";

function Home() {
    return (
        <div>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Welcome to InventoryApp</h1>
                <p>Manage your products efficiently.</p>
            </div>
            <Products />
        </div>
    );
}

export default Home;