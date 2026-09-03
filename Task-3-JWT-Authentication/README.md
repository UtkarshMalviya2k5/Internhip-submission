# Task-3-JWT-Authentication

## 📌 Objective
Build a complete React Single Page Application (SPA) with a Node.js/Express backend that incorporates robust JWT Authentication to protect CRUD operations and routes.

## 🚀 Technologies Used
- React.js
- React Router DOM
- Axios
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- CSS

## ✨ Features
### Backend Features
- Authentication
- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Generation
- JWT Verification Middleware
- Protected API (Requires valid JWT):
  - `GET    /api/products`
  - `POST   /api/products`
  - `PUT    /api/products/:id`
  - `DELETE /api/products/:id`

### Frontend Features
- Public Pages:
  - Register
  - Login
- Protected Pages (Redirect to Login if unauthenticated):
  - Home
  - Products
  - Add Product
  - Edit Product

## 📁 Project Structure

```text
Task-3-JWT-Authentication
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── AddProduct.jsx
│   │   │   ├── EditProduct.jsx
│   │   │   └── Home.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── controllers
│   │   ├── authController.js
│   │   └── productController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── docs
├── screenshots
├── README.md
└── .gitignore
```

## 🔒 Security Notes
- Passwords are hashed using bcrypt.
- JWT is used for authentication.
- Tokens are stored in localStorage for this internship project.
- In production, HTTP-only cookies are generally preferred because they help reduce XSS risks.

## 🛠 Installation

### Backend
```bash
cd server
npm install
# Create a .env file with MONGODB_URI, JWT_SECRET, and PORT
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

## 📸 Screenshots
Screenshots are available inside the **screenshots** folder. Ensure to take screenshots of the following:
- Register Page
- Login Page
- Successful Login
- JWT Token (e.g., from browser storage)
- Protected Route (redirect to login when unauthenticated)
- MongoDB Users Collection (Password stored as a hash)

## 👨‍💻 Author
**Bharath Marupaka**
MERN Stack Developer Intern
Alfido Tech Internship 2026