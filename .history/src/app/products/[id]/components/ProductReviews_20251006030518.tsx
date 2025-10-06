"use client";

import SectionHeading from "@/components/SectionHeading";
import RatingProgress from "./RatingProgress";



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

export default function ProductReviews() {
  const rating = "4.5";
  const totalReviews = "3.0K";

return (
  <div className="max-w-6xl mx-auto p-6 space-y-6">
    {/* Header with vertical line */}
    <SectionHeading title="Rating & Reviews" />

    <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-6">
      {/* First div: Rating */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-6">
        {/* First div: Rating */}
        <div
          className="relative"
          style={{
            width: "182px",
            height: "180px",
          }}
        >
          {/* Main rating number with comma */}
          <h5
            className="font-poppins font-medium"
            style={{
              width: "182px",
              height: "180px",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontStyle: "Medium",
              fontSize: "120px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#020202",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {rating.replace(".", ",")}
          </h5>

          {/* /5 text */}
          <span
            className="absolute font-poppins font-medium"
            style={{
              bottom: "0",
              right: "0",
              width: "28px",
              height: "36px",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontStyle: "Medium",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#B0B0B0",
              opacity: 1,
            }}
          >
            /5
          </span>
        </div>

        {/* Rest of your content */}
      </div>

      {/* Second div: Stars + Progress bar + % */}
      <RatingProgress ratings={ratings} />

      {/* Third div: Total Reviews + Add Comment button */}
      <div className="flex flex-col gap-4 items-start">
        <h4 className="font-poppins font-semibold text-[20px]">{`totalReviews}</h4>
        <h4 className="font-poppins font-semibold text-[20px]">{`${totalReviews}`}</h4>
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
        <div
          key={review.id}
          className="p-6 bg-white rounded-lg border border-gray-200"
          style={{
            width: "1102px",
            height: "auto",
            minHeight: "48px",
          }}
        >
          {/* First Row - User info and rating with space between */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <span className="font-poppins font-medium text-[14px] text-gray-900">
                {review.user}
              </span>
              <span className="font-poppins font-semibold text-[14px]">
                {/* Filled stars with custom color */}
                <span style={{ color: "#BE968E" }}>
                  {"★".repeat(review.rating)}
                </span>
                {/* Empty stars with gray color */}
                <span style={{ color: "#D1D5DB" }}>
                  {"☆".repeat(5 - review.rating)}
                </span>
              </span>
            </div>
            <span className="font-poppins font-normal text-[14px] text-gray-500">
              4 months ago
            </span>
          </div>

          {/* Second Row - Comment */}
          <p
            className="font-poppins"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#020202",
              opacity: 1,
            }}
          >
            {review.comment}
          </p>
        </div>
      ))}
    </div>

    {/* View More Comments Button - Centered under reviews list */}
    <div className="flex justify-center mt-8">
      <button
        className="flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{
          width: "207px",
          height: "50px",
          borderRadius: "12px",
          opacity: 1,
          padding: "16px",
          backgroundColor: "#F5F5F5",
          color: "#BE968E",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        View More Comments
      </button>
    </div>
  </div>
)}