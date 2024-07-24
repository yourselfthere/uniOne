import React from "react";
import { useImageStore } from "../store/imagestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
const ImageModal = () => {
  const { isOpen, imageUrl, closeModal } = useImageStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        <img src={imageUrl} alt="Enlarged" className="w-[787px] h-[385px]" />
        <button
          className="absolute top-0.5 right-2 text-white text-2xl"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faWindowMinimize} />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
