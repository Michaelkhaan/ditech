import Image from "next/image";
import React, { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  imageSrc: string;
  Icon?: any;
  title: string;
  desc: string;
  className: string;
  imgClassName?: string;
  titleClassName?: string;
  descClassName?: string;
}
function Card({
  imageSrc,
  Icon = FaArrowRight,
  title,
  desc,
  className,
  imgClassName,
  titleClassName,
  descClassName,
}: Props) {
  return (
    <div
      className={`w-full border border-white bg-[#000303] mt-28 z-20 ${className}`}
    >
      <div className="w-full px-6 py-10 flex flex-col gap-16">
        <Image
          src={imageSrc}
          alt=""
          width={80}
          height={80}
          className={`${imgClassName}`}
        />
        <div className="flex flex-col gap-4">
          <h1 className={`text-white text-2xl font-semibold ${titleClassName}`}>
            {title}
          </h1>
          <p className={`${descClassName} text-white `}>{desc}</p>
        </div>
        <div className="w-full h-12">
          {
            <Icon className="text-white hover:text-[#00FBF4] cursor-pointer transition-all duration-500 hover:w-8 hover:h-8 w-10 h-10" />
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
