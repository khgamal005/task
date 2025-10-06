import Image from "next/image";

export default function ProductDetailsHeader() {

  return (
    <div className="w-full relative">
      {/* Background Image */}
      <div className="w-full h-30 relative">
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
            className="font-semibold"
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              padding: "0 16px", // Add some padding
              whiteSpace: "nowrap", // This keeps text in one line
            }}
          >
            PRODUCT DETAILS
          </h4>
        </div>
      </div>
    </div>
  );
}
