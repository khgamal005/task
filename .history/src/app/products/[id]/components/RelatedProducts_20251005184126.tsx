// 'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from '@/components/ProductCard';

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
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {filteredProducts.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images[0]} // first image
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
