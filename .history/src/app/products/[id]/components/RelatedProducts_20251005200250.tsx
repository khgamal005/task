<Carousel
  opts={{ 
    align: "start",
  }}
  className="w-full"
>
  <CarouselContent className="flex">
    {filteredProducts.map((product) => (
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
  <div className="flex justify-center gap-4 mt-4">
    <CarouselPrevious className="static transform-none bg-gray-200 p-2 rounded hover:bg-gray-300" />
    <CarouselNext className="static transform-none bg-gray-200 p-2 rounded hover:bg-gray-300" />
  </div>
</Carousel>