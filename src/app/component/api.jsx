// src/pages/_app.tsx
import '../app/style/api.css'; // Import global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
