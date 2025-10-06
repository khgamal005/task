'use client';

import { useParams } from 'next/navigation';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import ProductReviews from './components/ProductReviews';
import RelatedProducts from './components/RelatedProducts';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = product.find(p => p.id === productId);
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Carousel / Images */}
      <ProductImages images={product.images} />

      {/* Product Info: name, price, color, description */}
      <ProductInfo product={product} />

      {/* Reviews */}
      <ProductReviews productId={productId} />

      {/* Related Products */}
      <RelatedProducts currentId={productId} />
    </div>
  );
}
