'use client';

import { useState } from 'react';

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="w-full h-96 md:h-[400px] rounded overflow-hidden">
        <img
          src={mainImage}
          alt="main product"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 rounded overflow-hidden cursor-pointer border-2 ${
              img === mainImage ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

