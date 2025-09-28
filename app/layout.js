import "./globals.css";
import { CartProvider } from "../components/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
