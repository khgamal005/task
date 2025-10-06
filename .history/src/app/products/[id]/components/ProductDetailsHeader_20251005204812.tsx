import Image from 'next/image';

export default function ProductDetailsHeader() {
      const bagIcon = "/";

  return (
<div className="w-full relative">
  {/* Background Image */}
  <div className="w-full h-64 relative">
    <Image
      src="/3d.PNG"
      alt="Product Details Background"
      fill
      className="object-cover"
      priority
    />
    
    {/* Centered Heading */}
    <div className="absolute inset-0 flex items-center justify-center">
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
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
      >
        PRODUCT DETAILS
      </h4>
    </div>
  </div>
</div>
  );
}