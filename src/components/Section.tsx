import React from "react";
import Button from "./Button";
import Image from "next/image";

function Section() {
  return (
    <div className="bg-[#010a0a] px-10 py-16 flex justify-between items-center">
      <div className="mt-10">
        <h1 className="text-white text-6xl font-extrabold">
          <span className="text-[#00FBF4]">Mission</span> is to{" "}
          <span className="text-[#00FBF4]">Protect</span> Your Businesses & Much
          More
        </h1>
        <div className="min-h-[200px] mt-10">
          <Button type="button" title="Discover More" className="" />
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/young-technician.png"
          alt=""
          width={500}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Section;
