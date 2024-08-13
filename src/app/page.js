// src/app/page.js
import React from 'react';
import '../app/style/api.css'; // Import the CSS file

async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main>
      <h1>Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="product-card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
              </div>
              <button class="text-white bg-black rounded-md p-3">Buy Now</button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </main>
  );
}
