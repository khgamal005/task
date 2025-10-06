'use client';

import { useParams } from 'next/navigation';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import ProductReviews from './components/ProductReviews';
import RelatedProducts from './components/RelatedProducts';
import { products } from '@/app/data/products';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = products.find(p => p.id === productId);
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="min-h-screen bg-white"> {/* Added min-h-screen and bg-white */}
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Images + Info */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Carousel / Images */}
          <div className="w-full md:w-1/2">
            <ProductImages images={product.images} />
          </div>

          {/* Product Info: name, price, color, description */}
          <div className="w-full md:w-1/2">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Reviews */}
        <ProductReviews productId={productId} />

        {/* Related Products */}
        <RelatedProducts currentId={productId} />
      </div>
    </div>
  );
}