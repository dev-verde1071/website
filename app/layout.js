import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

export const metadata = {
  title: "Access Rack Solutions Inc.",
  description:
    "Commercial van upfitting: shelving, ladder racks, partitions & accessories. Compare prices across distributors and ship direct."
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
          <Header />
          <div className="container p-6">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
