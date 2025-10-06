import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-3 text-sm">
      {/* Home with icon */}
      <Link 
        href="/" 
        className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      
      <ChevronRight className="w-4 h-4 text-gray-400" />
      
      {/* Our Category */}
      <Link 
        href="/category" 
        className="text-gray-500 hover:text-gray-700 transition-colors"
      >
        Our Category
      </Link>
      
      <ChevronRight className="w-4 h-4 text-gray-400" />
      
      {/* Current Page - Product Details */}
      <span className="text-gray-900 font-medium">Product Details</span>
    </nav>
  );
}