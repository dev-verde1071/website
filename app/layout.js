// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Access Rack Solutions Inc.",
  description:
    "Commercial van upfitting: shelving, ladder racks, partitions & accessories. Compare prices across distributors and ship direct."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
            <Header />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
