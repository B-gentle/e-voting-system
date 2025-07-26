import React from "react";
import Image, { StaticImageData } from "next/image";

const HowItWorksCard = ({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image: StaticImageData
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center border border-gray-400 py-5 px-2 md:pl-10 md:pr-20 rounded-lg shadow-md my-1.5">
      <Image
        src={image}
        alt="How it works"
        width={90}
        height={90}
        className="w-[90px] pr-[20px]"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-center md:text-left">
          {title}
        </h3>
        <p className="text-sm text-gray-600 md:w-[600px] text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
