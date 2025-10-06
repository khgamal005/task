"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string;
  priceSale: string;
}

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const heartIcon = "/icons/heart.png";
  const bagIcon = "/icons/bag.png";

  return (
    <div className="space-y-4">
<div className="flex items-center justify-between w-full mb-4">
  {/* Product name badge */}
  <span
    className="inline-flex items-center justify-center
               font-poppins font-semibold text-[14px] leading-[14px]
               border border-[#BE968E] 
               rounded-[32px]
               px-4 py-2
               gap-2
               text-[#BE968E]"
    style={{ width: "82px", height: "37px" }}
  >
    {product.name}
  </span>

  {/* Icons */}
  <div className="flex gap-2">
    <div className="relative w-8 h-8">
      <Image src={heartIcon} alt="favorite" fill className="object-contain" />
    </div>
    <div className="relative w-8 h-8">
      <Image src={bagIcon} alt="bag" fill className="object-contain" />
    </div>
  </div>
</div>

<p
  className="font-poppins font-medium text-[24px] leading-[24px] text-[#020202] bg-transparent"
  style={{ width: '524px', height: '72px', marginTop: '2px' }}
>
  {product.description}
</p>


      <p className="font-semibold">Price: ${product.price}</p>
      < ${product.priceSale}</p>

<p
  className="font-poppins font-normal text-[12px] leading-[12px] text-[#333333]"
  style={{ width: '193px', height: '18px', marginTop: '4px' }}
>
  This price is exclusive of taxes
</p>

      <p>Color: {product.color}</p>
    </div>
  );
}
