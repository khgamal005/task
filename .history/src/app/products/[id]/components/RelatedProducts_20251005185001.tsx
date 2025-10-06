// 'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from '@/components/ProductCard';
import { relatedProducts } from "@/app/data/products";

// Define Product type based on your data
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  priceSale: number;
  color: string[];
  images: string[];
}

interface Props {
  currentId: number;
}



export default function RelatedProducts({ currentId }: Props) {
  // Exclude the current product from related products
  const filteredProducts: Product[] = relatedProducts.filter(
    (product: Product) => product.id !== currentId
  );

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Related Products</h2>
<Carousel
  opts={{ align: "start" }}
  className="w-full"
>
  <CarouselContent className="flex gap-4">
    {filteredProducts.map((product) => (
      <CarouselItem
        key={product.id}
        className="w-1/2 md:w-1/3 lg:w-1/4 p-1"
      >
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.images[0]}
        />
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Navigation buttons at bottom */}
  <div className="flex justify-center gap-4 mt-4">
    <CarouselPrevious className="bg-gray-200 p-2 rounded hover:bg-gray-300" />
    <CarouselNext className="bg-gray-200 p-2 rounded hover:bg-gray-300" />
  </div>
</Carousel>

    </div>
  );
}
