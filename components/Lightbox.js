"use client";
import { Lightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

export default function Gallery({ images }) {
  return <Lightbox images={images} />;
}
