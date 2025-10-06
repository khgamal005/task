'use client';

import { Progress,  } from "@/components/ui/progress";
import { ProgressIndicator } from "@radix-ui/react-progress";
import { Star } from "lucide-react";

interface Rating {
  stars: number; // 1-5
  percentage: number; // 0-100
}

interface Props {
  ratings: Rating[];
}

export default function RatingProgress({ ratings }: Props) {
  return (
    <div className="flex flex-col  md:gap-6 space-y-4 md:space-y-0">
      {ratings.map((rating, i) => (
        <div key={i} className="flex-1 flex flex-col md:flex-row md:items-center md:gap-4 w-full max-w-md">
          {/* Stars */}
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" fill="#BE968E" />
            <span className="font-poppins font-medium text-[16px]">{rating.stars}</span>
          </div>

          {/* Progress Bar */}
          <Progress
            value={rating.percentage}
            className="w-[248px] h-[6px] rounded-[12px] bg-gray-200"
          >
            <ProgressIndicator className="bg-[#BE968E] rounded-[12px]" />
          </Progress>

          {/* Percentage */}
          <span
            className="flex items-center justify-center font-poppins font-medium text-[20px] leading-[20px]"
            style={{
              width: "40px",
              height: "30px",
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            %{rating.percentage}
          </span>
        </div>
      ))}
    </div>
  );
}
