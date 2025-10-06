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
  const bagIcon = '/icons/bag.png'; 

  return (
    <div className="space-y-4">
<span
  className="inline-flex items-center justify-center
             font-poppins font-semibold text-[14px] leading-[14px]
             border border-[#BE968E] 
             rounded-[32px]
             px-4 py-2
             gap-2"
             
  style={{ width: '82px', height: '37px' }}
>
  {product.name}
</span>


      {/* Product image or heart overlay */}
      <div className="relative w-full h-96 md:h-[400px] rounded overflow-hidden">
        {/* Heart icon overlay */}
        <div className="absolute top-4 right-4 w-8 h-8">
          <Image src={heartIcon} alt="favorite" fill className="object-contain" />
          <Image src={bagIcon} alt="favorite" fill className="object-contain" />
        </div>
      </div>

      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p>Color: {product.color}</p>
    </div>
  );
}

