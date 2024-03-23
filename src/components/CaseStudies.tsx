import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

function CaseStudies() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlay1, setShowOverlay1] = useState(false);
  return (
    <div className="w-full px-10 bg-[#010a0a] pb-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#00FBF4] text-lg">Case Studies</h1>
        <p className="text-5xl font-extrabold text-white w-[750px] text-center leading-[80PX]">
          Latest <span className="text-[#00FBF4]">Showcase</span> &{" "}
          <span className="text-[#00FBF4]">Solutions</span> to{" "}
          <span className="text-[#00FBF4]">IT Solutions</span>
        </p>
      </div>
      <div className="mt-10 flex flex-wrap w-full">
        <div className="w-full sm:w-[33%] px-5">
          <div
            className=" relative cursor-pointer"
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <Image
              src="/female-hacker.jpg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            {showOverlay && (
              <div className="absolute bottom-10 px-5">
                <span className="w-10 h-10 border border-[#00FBF4] rounded-full flex justify-center items-center">
                  <Image src="/plus.png" alt="" width={20} height={20} />
                </span>
                <h1 className="text-white text-[22px] font-bold leading-[1px] mt-10">
                  IT Management
                </h1>
                <Button title="Read More" className="mt-10" type="button" />
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-[33%] px-5">
          <div className="relative">
            <Image
              src="/working-on-laptop.jpg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="absolute bottom-10 px-5">
              <span className="w-10 h-10 border border-[#00FBF4] rounded-full flex justify-center items-center">
                <Image src="/plus.png" alt="" width={20} height={20} />
              </span>
              <h1 className="text-white text-[22px] font-bold leading-[1px] mt-10">
                IT Management
              </h1>
              <div className="min-h-[100px] px-6">
                <Button title="Read More" className="mt-10" type="button" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[33%] px-5">
          <div
            className="relative"
            onMouseEnter={() => setShowOverlay1(true)}
            onMouseLeave={() => setShowOverlay1(false)}
          >
            <Image
              src="/data-engineers.jpg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            {showOverlay && (
              <div className="absolute bottom-10">
                <span className="w-10 h-10 border border-[#00FBF4] rounded-full flex justify-center items-center">
                  <Image src="/plus.png" alt="" width={20} height={20} />
                </span>
                <h1 className="text-white text-[22px] font-bold leading-[1px] mt-10">
                  IT Management
                </h1>
                <div className="min-h-[100px]">
                  <Button title="Read More" className="mt-10" type="button" />
                </div>
              </div>
            )}
            {showOverlay1 && (
              <div className="absolute bottom-10">
                <span className="w-10 h-10 border border-[#00FBF4] rounded-full flex justify-center items-center">
                  <Image src="/plus.png" alt="" width={20} height={20} />
                </span>
                <h1 className="text-white text-[22px] font-bold leading-[1px] mt-10">
                  IT Management
                </h1>
                <div className="min-h-[100px]">
                  <Button title="Read More" className="mt-10" type="button" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
