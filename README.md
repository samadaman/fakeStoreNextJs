
# Fake Store Next.js Project
This project demonstrates how to build a Next.js application that fetches and displays data from a fake store API. The application uses React's `useState` and `useEffect` hooks to manage state and handle side effects for data fetching.
## Features


 - Fetch Data: Retrieves product data from a fake store API.
 - Display Products: Shows a list of products with details.
 - Responsive Design: Ensures compatibility with various devices.
## Technologies Used

 - Next.js: A React framework for server-side rendering and static site generation.
 - Axios: A promise-based HTTP client for making requests.
 - CSS Modules/Tailwind CSS: For styling (depending on your setup).

## Code Overview
    • The main components of this project include:
    • Next.js: A React framework for server-side rendering and static site generation.
    • Axios: A promise-based HTTP client for making requests.
    • CSS Modules/Tailwind CSS: For styling (depending on your setup).

## Usage


| **NextJs** | & | **Tailwind/CSS**                
| :-------- | :------- | :------------------------- |
 



## Example Code

Here’s a basic example of how to fetch and display data using useState and useEffect in src/app/page.js:


    `"use client";
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
    
    export default HomePage;`



## Screenshots

![App Screenshot](https://cdn.dribbble.com/userupload/16059995/file/original-adac38667fc08308eff1fdda9afa9d5f.png?resize=1024x576)


## Contact

For any questions or feedback, please reach out to:

- Name: Samad Aman
- Email: amansamad2500@example.com

