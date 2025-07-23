import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type RatingProps = {
  value: number; // number of stars to show
  max?: number; // max stars (default 5)
  className?: string;
};

const Rating = ({ value, max = 5, className }: RatingProps) => {
  return (
    <div className={`flex ${className || ""}`}>
      {[...Array(max)].map((_, i) => {
        if (value >= i + 1) {
          return <FaStar key={i} className="text-yellow-400" size={20} />;
        } else if (value > i && value < i + 1) {
          return (
            <FaStarHalfAlt key={i} className="text-yellow-400" size={20} />
          );
        } else {
          return <FaRegStar key={i} className="text-gray-300" size={20} />;
        }
      })}
    </div>
  );
};

export default Rating;
