// src/app/page.jsx
"use client";
import { useEffect, useState } from 'react';
import { fetchProducts } from '../app/component/api';
import '../app/style/api.css'; // Import the CSS file

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="product-card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
