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
   
    </div>
  );
}
