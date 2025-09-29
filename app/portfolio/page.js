"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Ford F-250 XL Crew Cab with a 6.75-foot bed",
      description:
        "Aluminum Tank industries 80 gallon L shaped tank, GPI pump, RKI crossover toolbox and Holman pipe rack",
      images: [
        "/f250/front.jpg", // main image
        "/f250/rack.jpg", // extra images
        "/f250/box.jpg"
        "/f250/pump.jpg"
      ]
    }
  ];

 const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Portfolio</h1>
      <p>Completed upfit solutions for vans and trucks.</p>

      <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            <h2>{p.title}</h2>
            <p>{p.description}</p>

            {/* Main image */}
            <div
              style={{
                marginTop: "1rem",
                cursor: "pointer",
                maxWidth: "400px"
              }}
              onClick={() => {
                setActiveProject(p);
                setIsOpen(true);
              }}
            >
              <img
                src={p.images[0]}
                alt={p.title}
                style={{
                  width: "100%",
                  borderRadius: "0.75rem",
                  border: "1px solid #ccc"
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {isOpen && activeProject && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={activeProject.images.map((img) => ({ src: img }))}
        />
      )}
    </main>
  );
}
