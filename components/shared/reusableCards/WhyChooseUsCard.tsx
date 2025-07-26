import { ChooseUsProps } from "@/types";
import Image from "next/image";

const WhyChooseUsCard = ({ title, img, desc }: ChooseUsProps) => {
  return (
    <>
      <Image src={img} alt="Real-Time Results" width={40} height={40} />
      <h3 className="font-semibold text-black mt-4 mb-2">{title}</h3>
      <p className="text-blue-dark">{desc}</p>
    </>
  );
};

export default WhyChooseUsCard;
