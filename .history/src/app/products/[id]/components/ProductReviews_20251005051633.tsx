'use client';

interface Props {
  productId: number;
}

const reviewsMock = [
  { id: 1, user: 'Alice', comment: 'Great product!', rating: 5 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
  { id: 3, user: 'Charlie', comment: 'Could be better.', rating: 3 },
  { id: 4, user: 'Dave', comment: 'Not satisfied.', rating: 2 },
];

export default function ProductReviews({ productId }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header with vertical line */}
<div className="relative inline-block">
  <h2
    className="font-poppins font-semibold text-[24px] leading-[24px] mb-2"
    style={{ letterSpacing: "0", lineHeight: "100%" }}
  >
    Rating & Reviews
  </h2>

  {/* Bottom line */}
  <div
    className="absolute left-0 bottom-0"
    style={{
      width: "30px",   // full width under h2
      height: "4px",   // line thickness
      backgroundColor: "#BE968E",
      borderRadius: "16px",
    }}
  />
</div>





      {/* Reviews list */}
      <div className="space-y-4">
        {reviewsMock.map((review) => (
          <div key={review.id} className="p-4 bg-gray-50 rounded-md">
            <div className="flex items-center justify-between">
              <span className="font-poppins font-medium text-[14px]">
                {review.user}
              </span>
              <span className="font-poppins font-semibold text-[14px]">
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </span>
            </div>
            <p className="mt-2 font-poppins text-[14px] text-gray-700">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
