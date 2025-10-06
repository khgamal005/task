'use client';

interface Props {
  productId: number;
}

const reviewsMock = [
  { id: 1, user: 'Alice', comment: 'Great product!', rating: 5 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 3 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
];

export default function ProductReviews({ productId }: Props) {
  return (
<div className="flex items-center gap-3">
  {/* Vertical colored line */}
  <div
    className="rounded-xl"
    style={{
      width: "4px",
      height: "40px",
      backgroundColor: "#BE968E",
      transform: "rotate(90deg)", // optional, but you said angle 90°
      opacity: 1,
    }}
  />

  {/* Header */}
  <h2
    className="font-poppins font-semibold text-[24px] leading-[24px]"
    style={{ letterSpacing: "0", lineHeight: "100%" }}
  >
    Rating & Reviews
  </h2>
</div>

  );
}
