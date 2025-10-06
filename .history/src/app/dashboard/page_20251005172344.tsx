'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '../data/products';

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  
  useEffect(() => {
    const storedName = localStorage.getItem('userName');

    if (storedName) {
      setUserName(storedName);
    } else {
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className="p-6">
      {userName && <h1 className="text-2xl font-semibold mb-6">👋 Welcome, {userName}!</h1>}

      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
}
