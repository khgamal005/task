'use client';

import { useParams } from 'next/navigation';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import ProductReviews from './components/ProductReviews';
import RelatedProducts from './components/RelatedProducts';
import { products } from '@/app/data/products';
import ProductDetailsHeader from './components/ProductDetailsHeader';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = products.find(p => p.id === productId);
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden"> {/* Prevent horizontal scroll */}
    <ProductDetailsHeader />
     
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Images + Info */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Carousel / Images */}
          <div className="w-full md:w-1/2">
            <ProductImages images={product.images} />
          </div>

          {/* Product Info: name, price, color, description */}
          <div className="w-full md:w-1/2">
            <ProductInfo product={{ ...product, priceSale: String(product.priceSale) }} />
          </div>
        </div>

        {/* Reviews */}
        <div className="w-full"> {/* Ensure full width */}
          <ProductReviews productId={productId} />
        </div>

        {/* Related Products */}
        <div className="w-full overflow-hidden"> {/* Prevent overflow issues */}
          <RelatedProducts currentId={productId} />
        </div>
      </div>
    </div>
  );
}