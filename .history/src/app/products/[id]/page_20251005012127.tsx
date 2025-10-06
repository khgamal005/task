'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const found = products.find((p) => p.id === Number(id));
      setProduct(found);
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading product...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <div className="flex flex-col gap-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded-xl w-full h-72 object-cover"
        />
        <div className="flex gap-2 overflow-x-auto">
          {product.images.slice(1).map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt={`image-${i}`}
              className="w-20 h-20 rounded-lg object-cover border"
            />
          ))}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          {product.name}
        </h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-medium mt-2">
          <span className="text-gray-500">Color:</span> {product.color}
        </p>
        <p className="text-xl font-bold mt-3">${product.price}</p>
      </div>
    </div>
  );
}
