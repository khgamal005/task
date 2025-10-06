import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="w-full flex justify-center">
      <nav 
        className="flex items-center justify-center rounded-2xl"
        style={{
          width: '1200px',
          height: '56px',
          marginTop: '30px',
          marginLeft: '10px',
          opacity: 1,
          backgroundColor: '#ECECEC66',
        }}
      >
        <div className="flex items-center space-x-3 text-sm">
          <Link 
            href="/" 
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <ChevronRight className="w-4 h-4 text-gray-400" />
          
          <Link 
            href="/category" 
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Our Category
          </Link>
          
          <ChevronRight className="w-4 h-4 text-gray-400" />
          
          <span className="text-gray-900 font-medium">Product Details</span>
        </div>
      </nav>
    </div>
  );
}