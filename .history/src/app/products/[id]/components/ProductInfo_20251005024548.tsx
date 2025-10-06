'use client';

import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string;
}

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const heartIcon = '/icons/heart.png'; 
  const bagIcon = '/icons/.png'; 

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      {/* Product image or heart overlay */}
      <div className="relative w-full h-96 md:h-[400px] rounded overflow-hidden">
        {/* Heart icon overlay */}
        <div className="absolute top-4 right-4 w-8 h-8">
          <Image src={heartIcon} alt="favorite" fill className="object-contain" />
          <Image src={heartIcon} alt="favorite" fill className="object-contain" />
        </div>
      </div>

      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p>Color: {product.color}</p>
    </div>
  );
}

