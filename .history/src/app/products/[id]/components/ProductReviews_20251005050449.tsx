'use client';

interface Props {
  productId: number;
}

const reviewsMock = [
  { id: 1, user: 'Alice', comment: 'Great product!', rating: 5 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 3 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 2 },
];

export default function ProductReviews({ productId }: Props) {
  return (
div className="max-w-6xl mx-auto p-6 space-y-6">
  {/* Header with vertical line */}
  <div className="flex items-center gap-3">
    <div
      className="rounded-xl"
      style={{
        width: "4px",
        height: "40px",
        backgroundColor: "#BE968E",
        opacity: 1,
      }}
    />
    <h2
      className="font-poppins font-semibold text-[24px] leading-[24px]"
      style={{ letterSpacing: "0", lineHeight: "100%" }}
    >
      Rating & Reviews
    </h2>
  </div>

  {/* Reviews list */}
  <div className="space-y-4">
    {/* Example single review */}
    <div className="p-4 bg-gray-50 rounded-md">
      <div className="flex items-center justify-between">
        <span className="font-poppins font-medium text-[14px]">John Doe</span>
        <span className="font-poppins font-semibold text-[14px]">★★★★★</span>
      </div>
      <p className="mt-2 font-poppins text-[14px] text-gray-700">
        Great product! Very comfortable and high quality.
      </p>
    </div>

    {/* Repeat review cards */}
  </div>
</div>

  );
}
