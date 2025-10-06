'use client';

import Link from 'next/link';

interface Props {
  currentId: number;
}
 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from '@/components/ProductCard';
export default function RelatedProducts({ currentId }: Props) {
  const Related = relate.filter(p => p.id !== currentId).slice(0, 4);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Related Products</h2>
<Carousel
  opts={{
    align: "start",
  }}
  className="w-full max-w-sm"
>
  <CarouselContent>
    {related.map((product) => (
      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0]}
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
