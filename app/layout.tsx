import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Access Rack Solutions Inc.",
  description:
    "Commercial van upfitting: shelving, ladder racks, partitions & accessories. Compare prices across distributors and ship direct."
};

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#F7F3ED] text-black">
        <div className="mx-auto max-w-7xl p-4 grid grid-cols-12 gap-6">
          <Header />
          <main className="col-span-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
