"use client";
import Gallery from "@/components/Lightbox";
import f250 from "@/public/f250.jpg";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Ford F-250 XL Crew Cab with 6.75-foot bed",
      description:
        "Aluminum Tank Industries 80 gallon L shaped tank, GPI pump, RKI crossover toolbox and Holman pipe rack",
      images: [
        { src: f250.src, alt: "F-250 upfit" }
      ]
    }
  ];

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Portfolio</h1>
      {projects.map((p, idx) => (
        <div key={idx} style={{ marginBottom: "2rem", border: "1px solid #ddd", borderRadius: "1rem", padding: "1rem" }}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <Gallery images={p.images} />
        </div>
      ))}
    </main>
  );
}
