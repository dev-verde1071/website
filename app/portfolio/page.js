"use client";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

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
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const openLightbox = (project, index) => {
    setActiveProject(project);
    setPhotoIndex(index);
    setIsOpen(true);
  };

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
            >
              <img
                src={p.images[0]}
                alt={p.title}
                style={{
                  width: "100%",
                  borderRadius: "0.75rem",
                  border: "1px solid #ccc"
                }}
                onClick={() => openLightbox(p, 0)}
              />
            </div>

            {/* Thumbnail gallery */}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              {p.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${p.title} thumbnail ${idx}`}
                  style={{
                    width: "80px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    cursor: "pointer"
                  }}
                  onClick={() => openLightbox(p, idx + 1)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {isOpen && activeProject && (
        <Lightbox
          mainSrc={activeProject.images[photoIndex]}
          nextSrc={
            activeProject.images[(photoIndex + 1) % activeProject.images.length]
          }
          prevSrc={
            activeProject.images[
              (photoIndex + activeProject.images.length - 1) %
                activeProject.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + activeProject.images.length - 1) %
                activeProject.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % activeProject.images.length)
          }
        />
      )}
    </main>
  );
}
