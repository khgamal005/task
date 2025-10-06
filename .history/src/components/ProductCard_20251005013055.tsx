'use client';

import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg cursor-pointer overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 mt-1">${price}</p>
        </div>
      </div>
    </Link>
  );
}
