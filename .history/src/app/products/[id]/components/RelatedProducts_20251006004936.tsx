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
import SectionHeading from "@/components/SectionHeading";

// Define Product type based on your data
export interface Product {
  reviewCount: number | undefined;
  rating: number | undefined;
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
  // const filteredProducts: Product[] = relatedProducts.filter(
  //   (product: Product) => product.id !== currentId
  // );

  return (
    <div className="space-y-2">
  <SectionHeading title="Similar Items" />
<Carousel
  opts={{ 
    align: "start",
  }}
  className="w-full"
>
  <CarouselContent className="flex">
    {relatedProducts.map((product) => (
      <CarouselItem
        key={product.id}
        className="basis-1/2 md:basis-1/4 flex-shrink-0 pl-4" // 2 on mobile, 4 on desktop
      >
        <div className="w-full">
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0]}
            description={product.description}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Navigation buttons at bottom */}
  <div className="flex justify-center gap-4 mt-8">
    <CarouselPrevious 
      className="static transform-none p-2 rounded-[36px] hover:opacity-80 transition-opacity"
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#BE968E",
        transform: "rotate(180deg)"
      }}
    />
    <CarouselNext 
      className="static transform-none p-2 rounded-[36px] hover:opacity-80 transition-opacity"
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#BE968E"
      }}
    />
  </div>
</Carousel>


    </div>
  );
}
