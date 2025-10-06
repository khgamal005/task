'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-96 md:h-[400px] rounded overflow-hidden">
        <Image
          src={mainImage}
          alt="main product"
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setMainImage(img)}
            className={`relative w-20 h-20 rounded overflow-hidden cursor-pointer border-2 ${
              img === mainImage ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <Image
              src={img}
              alt={`thumb-${i}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
