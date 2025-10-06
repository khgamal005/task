"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function ProductInfo({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const pricePerPiece = 300.00;
  const totalPrice = quantity * pricePerPiece;
  const heartIcon = "/icons/heart.png";
  const bagIcon = "/icons/bag.png";

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="space-y-6">
      {/* Header with product name and icons */}
      <div className="flex items-center justify-between w-full">
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

        <div className="flex gap-2">
          <div className="relative w-8 h-8 cursor-pointer">
            <Image
              src={heartIcon}
              alt="favorite"
              fill
              className="object-contain hover:opacity-70 transition-opacity"
            />
          </div>
          <div className="relative w-8 h-8 cursor-pointer">
            <Image 
              src={bagIcon} 
              alt="bag" 
              fill 
              className="object-contain hover:opacity-70 transition-opacity" 
            />
          </div>
        </div>
      </div>

      {/* Product Description */}
      <p
        className="font-poppins font-medium text-[24px] leading-[24px] text-[#020202] bg-transparent"
        style={{ width: "524px", height: "72px" }}
      >
        {product.description}
      </p>

      {/* Pricing */}
      <div className="flex items-center gap-4">
        <span
          className="font-poppins font-medium text-[20px] leading-[20px] text-[#020202]"
          style={{ width: "81px", height: "30px" }}
        >
          ${product.priceSale}
        </span>
        <span
          className="font-poppins font-normal text-[16px] leading-[22px] text-[#8A8A8A] line-through"
          style={{ width: "64px", height: "22px" }}
        >
          ${product.price}
        </span>
      </div>

      {/* Tax Notice */}
      <p
        className="font-poppins font-normal text-[12px] leading-[12px] text-[#333333]"
        style={{ width: "193px", height: "18px" }}
      >
        This price is exclusive of taxes
      </p>

      {/* Additional Description */}
      <p
        className="font-poppins font-normal text-[14px] leading-[14px] text-[#020202]"
        style={{
          width: "510px",
          height: "42px",
        }}
      >
        Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy.
        Lorem ipsum dolor sit amet, diam nonummy.
      </p>

      {/* Type Select */}
      <div className="relative w-[299px]">
        <div
          className="absolute -top-3 left-2 
                   font-poppins font-normal text-[12px] leading-[12px]
                   text-[#020202] bg-white px-1"
          style={{ width: "29px", height: "18px" }}
        >
          Type
        </div>
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

      {/* Size Select */}
      <div className="relative w-[299px]">
        <div
          className="absolute -top-3 left-2 
                   font-poppins font-normal text-[12px] leading-[12px]
                   text-[#020202] bg-white px-1"
          style={{ width: "29px", height: "18px" }}
        >
          Size
        </div>
        <Select>
          <SelectTrigger className="w-full h-[45px] border border-[#00000026] rounded-[10px] bg-white">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2xl">2XL</SelectItem>
            <SelectItem value="xl">XL</SelectItem>
            <SelectItem value="l">L</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Colors */}
      <div className="space-y-2">
        <h3 className="text-black font-medium text-[20px]">Colors</h3>
        <div className="flex gap-2">
          {product.color.map((hex, i) => (
            <div
              key={i}
              className="w-[60px] h-[60px] rounded-full bg-[#F4F7F9] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <div
                className="w-[32px] h-[32px] rounded-full border border-gray-400"
                style={{ backgroundColor: hex }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Quantity and Add to Cart */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
        {/* Quantity Section */}
        <div className="flex-1 w-full">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Quantity</h3>
            <span className="text-gray-500 text-sm">(${pricePerPiece.toFixed(2)} per Piece)</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-between px-2"
              style={{
                width: "184px",
                height: "56px",
                borderRadius: "12px",
                backgroundColor: "#F5F5F5",
              }}
            >
              <button
                onClick={handleDecrease}
                className="text-gray-800 font-bold flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                }}
                disabled={quantity <= 1}
              >
                -
              </button>

              <span className="text-gray-800 font-medium text-lg">{quantity}</span>

              <button
                onClick={handleIncrease}
                className="text-gray-800 font-bold flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                +
              </button>
            </div>

            <span className="text-gray-800 font-semibold text-lg">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Add to Cart Button */}

<div className="flex-1 w-full flex items-end">
  <button
    className="flex items-center justify-center rounded-[12px] hover:bg-[#a8827a] transition-colors cursor-pointer"
    style={{
      width: "234px",
      height: "56px",
      gap: "8px",
      padding: "16px 32px",
      backgroundColor: "#BE968E",
    }}
  >
    <Lock className="w-5 h-5 text-white" />
    <span className="text-white font-semibold text-lg">Add to cart</span>
  </button>
</div>
      </div>
    </div>
  );
}