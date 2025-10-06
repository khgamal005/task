'use client';
import hearticon from '@iconify/icons-mdi/heart';
import hearticon from '@iconify/icons-mdi/heart';

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
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="relative w-full h-96 md:h-[400px] rounded overflow-hidden">
        <Image
          src={mainImage}
          alt="main product"
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>     
      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p>Color: {product.color}</p>
    </div>
  );
}
