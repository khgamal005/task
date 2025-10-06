import Image from 'next/image';

export default function ProductDetailsHeader() {
      const bagIcon = "/";

  return (
    <div className="w-full relative">
      {/* Background Image */}
      <div className="w-full h-64 relative"> {/* Adjust height as needed */}
        <Image
          src="/3d.jpg" // Path to your background image in public folder
          alt="Product Details Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Centered Heading */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          top: '164px',
          left: '597px',
          opacity: 1,
        }}
      >
        <h4 
          className="text-center font-semibold"
          style={{
            width: '247px',
            height: '48px',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            background: 'var(--Black-black-500, #020202)',
            color: 'white', // Assuming you want white text on black background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px', // Optional: if you want rounded corners
          }}
        >
          Product Details
        </h4>
      </div>
    </div>
  );
}