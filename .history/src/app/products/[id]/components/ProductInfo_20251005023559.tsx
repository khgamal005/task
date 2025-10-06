'use client';


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
     
      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p>Color: {product.color}</p>
    </div>
  );
}
