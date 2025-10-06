'use client';

import { products } from '@/app/data/products';
import Link from 'next/link';

interface Props {
  currentId: number;
}

export default function RelatedProducts({ currentId }: Props) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
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
