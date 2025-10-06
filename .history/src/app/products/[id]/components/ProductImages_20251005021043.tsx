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
        <Image
          src={mainImage}
          alt="main product"
          fill
          className="object-cover rounded"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setMainImage(img)}
            <Image
              src={img}
              alt={`thumb-${i}`}
              fill
              className="object-cover"
              style={{ objectFit: 'cover' }}
              sizes="80px"
            />
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

