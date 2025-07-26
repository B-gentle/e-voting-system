import { ChooseUsProps } from "@/types";
import Image from "next/image";

const UseCaseCards = ({ title, desc, img }: ChooseUsProps) => {
  return (
    <>
      <Image src={img} alt="Real-Time Results" width={40} height={40} />
      <h3 className="font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-center">{desc}</p>
    </>
  );
};

export default UseCaseCards;
