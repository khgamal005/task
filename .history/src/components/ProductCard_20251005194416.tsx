import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  className?: string;
  description?: string;
  priceSale?: number;
  rating?: number;
  reviewCount?: number;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  className,
  description = "Beautiful dress for any occasion",
  priceSale,
  rating = 4.5,
  reviewCount = 2019
}: ProductCardProps) {
  const heartIcon = "/icons/heart.png";
  const bagIcon = "/icons/bag.png";
  const colors = ['#D90202', '#F5F5F5', '#988755', '#7198C8', '#5D5D5B'];

  return (
    <Link href={`/products/${id}`}>
      <div 
        className={`border rounded-lg shadow hover:shadow-lg cursor-pointer overflow-hidden flex flex-col ${className}`}
        style={{
          width: '288px',
          height: '384px',
          gap: '12px',
          opacity: 1,
          transform: 'rotate(0deg)'
        }}
      >
        {/* Image Section with Top Right Icons */}
        <div className="relative flex-shrink-0">
          <Image 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover" 
            style={{ height: '192px' }}
          />
          
          {/* Top Right Icons */}
          <div className="absolute top-2 right-2 flex gap-2">
            <button 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Add to wishlist logic
              }}
            >
              <img src={heartIcon} alt="Add to wishlist" className="w-4 h-4" />
            </button>
            <button 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Add to cart logic
              }}
            >
              <img src={bagIcon} alt="Add to cart" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Content - 3 Rows */}
        <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
          {/* First Row: Dresses and Rating */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-800">Dresses</span>
            <div 
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{ backgroundColor: '#BE968E' }}
            >
              <span className="text-sm font-medium text-white">{rating}</span>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm text-white">({reviewCount})</span>
            </div>
          </div>

          {/* Second Row: Description */}
          <p className="text-sm text-gray-600 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Third Row: Price and Colors */}
          <div className="flex justify-between items-center">
            {/* Price Section */}
            <div className="flex items-center gap-2">
              {priceSale ? (
                <>
                  <span className="text-lg font-bold text-gray-900">${priceSale}</span>
                  <span className="text-sm text-gray-500 line-through">${price}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-900">${price}</span>
              )}
            </div>

            {/* Color Dots */}
            <div className="flex gap-1">
              {colors.slice(0, 3).map((hex, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: hex }}
                />
              ))}
              {colors.length > 3 && (
                <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-600">+{colors.length - 3}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}