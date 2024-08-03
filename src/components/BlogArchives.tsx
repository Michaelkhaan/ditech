import Image from "next/image";
import React from "react";

export default function BlogArchives() {
  return (
    <div className="w-full relative">
      <div
        className="w-full h-64 absoluteoverflow-hidden"
        style={{ backgroundImage: "url('/view.jpg')" }}
      >
        {/* <Image
          src="/view.jpg"
          alt=""
          width={100}
          height={100}
          objectFit="contain"
          className="w-full"
        /> */}
      </div>
      <div className="w-full pt-6 flex flex-col justify-center items-center">
        <h1 className="text-center">
          <span className="text-8xl font-[700] text-[#00FBF4] ">Archive</span>
          <span className="text-8xl font-[700] text-white">s</span>
        </h1>
        <ul className="list-none flex items-center gap-1 mt-8 ">
          <li className="text-white text-[16px] font-[400]">Home</li>
          <span className="text-white items-center text-4xl font-bold">-</span>
          <li className="text-[#00FBF4] text-[16px] font-[400] hover:text-white cursor-pointer">
            Archives
          </li>
        </ul>
      </div>
    </div>
  );
}
