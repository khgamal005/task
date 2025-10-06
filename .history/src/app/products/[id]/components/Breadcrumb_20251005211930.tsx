<nav 
  className="flex items-center justify-end rounded-2xl" {/* Changed justify-center to justify-end */}
  style={{
    width: '1200px',
    height: '56px',
    top: '300px',
    left: '120px',
    opacity: 1,
    backgroundColor: '#ECECEC66',
  }}
>
  <div className="flex space-x-3 text-sm mr-6"> {/* Added mr-6 for some right padding */}
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