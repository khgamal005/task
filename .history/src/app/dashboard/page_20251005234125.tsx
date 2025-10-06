// app/dashboard/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from '@/components/ProductCard';
import { products } from "@/app/data/products";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    
    if (!userName || !token) {
      // Redirect to login if not authenticated
      router.push("/signin");
      return;
    }
    
    setUser(userName);
  }, [router]);

  const handleProductClick = (id) => {
    router.push(`/product/${productId}`);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user}!
          </h1>
          <p className="text-gray-600 mt-2">
            Explore our amazing products collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleProductClick(product.id)}
              className="cursor-pointer"
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                priceSale={product.priceSale}
                image={product.images[0]} // Use first image
                rating={4.5} // You can add rating to your product data if needed
                reviewCount={2019} // You can add reviewCount to your product data if needed
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-600">
              No products available
            </h2>
            <p className="text-gray-500 mt-2">
              Check back later for new products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}