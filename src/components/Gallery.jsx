import React from "react";
import { useImageStore } from "../store/imagestore";
import ImageModal from "./ImageModal";
import images from "../images.json";
import Navbar from "./Navbar";
const Gallery = () => {
  const openModal = useImageStore((state) => state.openModal);
  return (
    <div className="gallery">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item cursor-pointer"
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <p className="mt-2">{image.description}</p>
          </div>
        ))}
      </div>
      <ImageModal />
    </div>
  );
};

export default Gallery;
