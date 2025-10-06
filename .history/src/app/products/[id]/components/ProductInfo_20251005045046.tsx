"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string[];
  priceSale: string;
}

interface Props {
  product: Product;
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            <Image
              src={heartIcon}
              alt="favorite"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-8 h-8">
            <Image src={bagIcon} alt="bag" fill className="object-contain" />
          </div>
        </div>
      </div>

      <p
        className="font-poppins font-medium text-[24px] leading-[24px] text-[#020202] bg-transparent"
        style={{ width: "524px", height: "72px", marginTop: "2px" }}
      >
        {product.description}
      </p>

      <div className="flex items-center gap-4">
        {/* Sale Price */}
        <span
          className="font-poppins font-medium text-[20px] leading-[20px] text-[#020202]"
          style={{ width: "81px", height: "30px" }}
        >
          ${product.priceSale}
        </span>

        {/* Original Price */}
        <span
          className="font-poppins font-normal text-[16px] leading-[22px] text-[#8A8A8A] line-through"
          style={{ width: "64px", height: "22px" }}
        >
          ${product.price}
        </span>
      </div>

      <p
        className="font-poppins font-normal text-[12px] leading-[12px] text-[#333333]"
        style={{ width: "193px", height: "18px", marginTop: "4px" }}
      >
        This price is exclusive of taxes
      </p>
      <p
        className="font-poppins font-normal text-[14px] leading-[14px] text-[#020202]"
        style={{
          width: "510px",
          height: "42px",
          marginTop: "4px",
        }}
      >
        Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy.
        Lorem ipsum dolor sit amet, diam nonummy.
      </p>
      <div className="relative w-[299px]">
        {/* Label */}
        <div
          className="absolute -top-3 left-2 
                   font-poppins font-normal text-[12px] leading-[12px]
                   text-[#020202] bg-white px-1"
          style={{ width: "29px", height: "18px" }}
        >
          Type
        </div>

        {/* Select */}
        <Select>
          <SelectTrigger className="w-full h-[45px] border border-[#00000026] rounded-[10px] bg-white">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cotton">Cotton</SelectItem>
            <SelectItem value="silk">Silk</SelectItem>
            <SelectItem value="linen">Linen</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative w-[299px]">
        {/* Label */}
        <div
          className="absolute -top-3 left-2 
                   font-poppins font-normal text-[12px] leading-[12px]
                   text-[#020202] bg-white px-1"
          style={{ width: "29px", height: "18px" }}
        >
          Size
        </div>

        {/* Select */}
        <Select>
          <SelectTrigger className="w-full h-[45px] border border-[#00000026] rounded-[10px] bg-white">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cotton">2XL</SelectItem>
            <SelectItem value="silk">XL</SelectItem>
            <SelectItem value="linen">L</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        {/* Title */}
        <h3 className="text-black font-medium text-[20px]">Colors</h3>

        {/* Color swatches row */}
        <div className="flex gap-2">
          {product.color.map((hex, i) => (
            <div
              key={i}
              className="w-[60px] h-[60px] rounded-full bg-[#F4F7F9] flex items-center justify-center"
            >
              <div
                className="w-[32px] h-[32px] rounded-full border border-gray-400"
                style={{ backgroundColor: hex }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* First div: Quantity */}
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-lg font-semibold">
              Quantity{" "}
              <span className="text-gray-500 text-sm">($300.00 per Piece)</span>
            </h3>
          </div>
          <div className="flex items-center">
            <div>

            <button
              className="text-gray-800 font-bold flex items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
              }}
              >
              -
            </button>

            <span className="px-4 py-[4x]">
              {1}
            </span>
            <button
              className="text-gray-800 font-bold flex items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
              }}
              >
              -
            </button>

              </div>
            <span>$300.00</span>
          </div>
        </div>

        {/* Second div: Add to Cart */}
        <div className="flex-1">
          <button
            className="flex items-center justify-center rounded-[12px]"
            style={{
              width: "234px",
              height: "56px",
              gap: "8px",
              padding: "16px 32px",
              backgroundColor: "#BE968E",
            }}
          >
            <span className="text-white flex items-center">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
