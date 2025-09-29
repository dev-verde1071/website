"use client";
import LightboxGallery from "../../components/LightboxGallery";

const portfolioItems = [
  {
    title: "Ford F-250 XL Crew Cab with a 6.75-foot bed",
    description:
      "Aluminum Tank Industries 80 gallon L-shaped tank, GPI pump, RKI crossover toolbox, and Holman pipe rack.",
     images: [
    "/images/portfolio/f250/front.jpg",   // this will show on the card
    "/images/portfolio/f250/rack.jpg", 
    "/images/portfolio/f250/box.jpg",
    "/images/portfolio/f250/pump.jpg"
       ]
  },
  {
    title: "Ford Transit Connect",
    description:
      "Custom shelving and ladder rack installation for a commercial plumbing van.",
    images: ["/images/portfolio/transit1.jpg", "/images/portfolio/transit2.jpg"]
  },
  {
    title: "Mercedes Sprinter",
    description:
      "Full interior upfit with partitions, shelving, and secure tool storage.",
    images: ["/images/portfolio/sprinter1.jpg", "/images/portfolio/sprinter2.jpg"]
  },
  {
    title: "Ram ProMaster",
    description:
      "Electrical contractor van with ladder rack and custom shelving solution.",
    images: ["/images/portfolio/promaster1.jpg"]
  }
];

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 });

  const openLightbox = (images, index = 0) => {
    setLightbox({ isOpen: true, images, index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], index: 0 });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
        Our Portfolio
      </h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "#FFFDF8",
              border: "1px solid #E6DCCD",
              borderRadius: "1rem",
              padding: "1rem"
            }}
          >
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {item.title}
            </h2>
            <p style={{ marginBottom: "1rem", color: "#6B5B4D" }}>
              {item.description}
            </p>

            {item.images.length > 0 && (
              <img
                src={item.images[0]}
                alt={item.title}
                onClick={() => openLightbox(item.images)}
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  objectFit: "cover"
                }}
              />
            )}
          </div>
        ))}
      </section>

      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: "20px",
              fontSize: "2rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            ‹
          </button>

          <img
            src={lightbox.images[lightbox.index]}
            alt="Portfolio Image"
            style={{
              maxWidth: "90%",
              maxHeight: "80%",
              borderRadius: "0.5rem"
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "2rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            ›
          </button>

          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "1.5rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
