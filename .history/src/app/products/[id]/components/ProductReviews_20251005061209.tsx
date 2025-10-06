"use client";
import { Progress } from "@/components/ui/progress"; // shadcn progress
import { ProgressIndicator } from "@radix-ui/react-progress";
import { Star } from "lucide-react";

interface Props {
  productId: number;
}

const ratings = [
  { stars: 5, percentage: 67 },
  { stars: 4, percentage: 23 },
  { stars: 3, percentage: 10 },
];
const reviewsMock = [
  { id: 1, user: "Alice", comment: "Great product!", rating: 5 },
  { id: 2, user: "Bob", comment: "Good value for money.", rating: 4 },
  { id: 3, user: "Charlie", comment: "Could be better.", rating: 3 },
  { id: 4, user: "Dave", comment: "Not satisfied.", rating: 2 },
];

export default function ProductReviews({ productId }: Props) {
  const rating = 4.5;
  const ratingPercentage = 67; // example
  const totalReviews = "3.0K";

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
            width: "30px", // full width under h2
            height: "4px", // line thickness
            backgroundColor: "#BE968E",
            borderRadius: "16px",
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center p-6">
        {/* First div: Rating */}
        <div
          className="relative flex items-end"
          style={{ width: "182px", height: "180px" }}
        >
          <h5
            className="font-poppins font-medium text-[120px] leading-[120px]"
            style={{ color: "var(--Black-black-500)" }}
          >
            {Math.floor(rating)}
          </h5>
          <span
            className="absolute bottom-4 left-[90px] font-poppins font-medium text-[32px]"
            style={{ color: "var(--Black-black-500)" }}
          >
            .{Math.round((rating % 1) * 10)}/5
          </span>
        </div>

        {/* Second div: Stars + Progress bar + % */}
        <div>
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:gap-4 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6" fill="#BE968E" />
              <span className="font-poppins font-medium text-[16px]">{5}</span>
            </div>

            <Progress
              value={ratingPercentage} // 0-100
              className="w-[248px] h-[6px] rounded-[12px] bg-gray-200"
            >
              <ProgressIndicator className="bg-[#BE968E] rounded-[12px]" />
            </Progress>

            <span
              className="flex items-center justify-center font-poppins font-medium text-[20px] leading-[20px]"
              style={{
                width: "40px",
                height: "30px",
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              %67
            </span>
          </div>
        </div>

        {/* Third div: Total Reviews + Add Comment button */}
        <div className="flex flex-col gap-4 items-start">
          <h4 className="font-poppins font-semibold text-[20px]">{`Total Reviews ${totalReviews}`}</h4>
          <button
            className="rounded-[12px] h-14 px-8 bg-[#BE968E] text-white font-semibold"
            style={{ width: "186px", height: "56px", gap: "8px" }}
          >
            Add Comment
          </button>
        </div>
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
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
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
