
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



## Screenshots

![App Screenshot](https://cdn.dribbble.com/userupload/16063516/file/original-c5945509a9e99a66e2eba13dd196fe7b.png?resize=1024x576&vertical=center)


## Contact

For any questions or feedback, please reach out to:

- Name: Samad Aman
- Email: amansamad2500@example.com

