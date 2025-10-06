'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
};

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
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0]}
          />
        ))}
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
