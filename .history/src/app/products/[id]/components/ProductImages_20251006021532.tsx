"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const displayedThumbnails = images.slice(0, 2); 
  const remainingImagesCount = images.length - 2; 

  return (
    <div className="w-full space-y-4">
      {/* Main Image with Navigation Arrows */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={`Product image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Grid - 2 images + 1 overlay */}
      <div className="grid grid-cols-3 gap-3">
        {/* First 2 thumbnails */}
        {displayedThumbnails.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${
              currentImageIndex === index ? "border-[#BE968E]" : "border-transparent"
            }`}
            onClick={() => selectImage(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
        
        {remainingImagesCount > 0 && (
          <div
            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => selectImage(2)} 
          >
            {/* Show the 3rd image as background */}
            {images[2] && (
              <Image
                src={images[2]}
                alt="More images"
                fill
                className="object-cover opacity-50"
              />
            )}
            
            {/* Overlay with +X count */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                +{remainingImagesCount}
              </span>
            </div>
          </div>
        )}

        {/* Empty space if less than 3 images */}
        {remainingImagesCount <= 0 && images.length < 3 && (
          <div className="aspect-square bg-transparent"></div>
        )}
      </div>
    </div>
  );
}