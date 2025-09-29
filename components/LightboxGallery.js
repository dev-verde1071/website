"use client";
import { useState } from "react";

export default function LightboxGallery({ images }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img
        src={images[0]}
        alt="Gallery"
        style={{ maxWidth: "300px", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100
          }}
          onClick={() => setOpen(false)}
        >
          <div>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Upfit"
                style={{
                  maxHeight: "80vh",
                  margin: "0.5rem",
                  borderRadius: "0.5rem"
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
