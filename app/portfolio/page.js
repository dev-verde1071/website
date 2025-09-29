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
  return (
    <section>
      <h1>Portfolio</h1>
      {projects.map((p, i) => (
        <div key={i} style={{ margin: "2rem 0" }}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <LightboxGallery images={p.images} />
        </div>
      ))}
    </section>
  );
}
