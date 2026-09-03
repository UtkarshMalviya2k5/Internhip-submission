# Product API Documentation

## Base URL
http://localhost:5000

## Get All Products
GET
/api/products

## Get Product By ID
GET
/api/products/:id

## Create Product
POST
/api/products

Body

# json
{
  "name": "iPhone 15",
  "description": "Apple Smartphone",
  "price": 79999,
  "category": "Mobile",
  "stock": 15,
  "image": "https://example.com/iphone15.jpg"
}

## Update Product
PUT
/api/products/:id

## Delete Product
DELETE
/api/products/:id