import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
};

export function StarRating({ rating, max = 5, size = 14, className = "" }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? "fill-[#B69A65] text-[#B69A65]" : "fill-[#E8DCCB] text-[#E8DCCB]"}
        />
      ))}
    </div>
  );
}
