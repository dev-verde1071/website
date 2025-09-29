import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata = {
  title: "Access Rack Solutions Inc.",
  description: "Van and truck upfitting – shelving, racks, partitions & accessories."
};

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

