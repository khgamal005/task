'use client';

import { products } from '@/app/data/products';
import Link from 'next/link';

interface Props {
  currentId: number;
}

export default function RelatedProducts({ currentId }: Props) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map(p => (
          <Link key={p.id} href={`/products/${p.id}`} className="border rounded p-2 hover:shadow">
            <img src={p.images[0]} alt={p.name} className="w-full h-32 object-cover mb-2 rounded" />
            <p className="font-semibold">{p.name}</p>
            <p>${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
