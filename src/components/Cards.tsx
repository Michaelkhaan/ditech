import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Cards() {
  return (
    <div className="w-full p-8  bg-[#0D1B1B] flex flex-wrap ">
      <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
        <div className="mt-10 border-2 border-white">
          <Image
            src="/serious.jpg"
            alt=""
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-6">
            <h1 className="text-[25px] font-[700] text-white">
              Digital Conference Of IT Tech Events…
            </h1>
            <p className="text-[#DADADA] mt-5">
              Digital Conference Of IT Tech Events in 2020 Home – Single Post
              Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi elit arcu, posuere…
            </p>
            <Button
              type={"button"}
              title={"Learn more"}
              className={"text-white mt-7"}
            />
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 lg:w-1/3 px-3">
        <div className="mt-10  border-2 border-white">
          <Image
            src="/serious.jpg"
            alt=""
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-6">
            <h1 className="text-[25px] font-[700] text-white">
              Digital Conference Of IT Tech Events…
            </h1>
            <p className="text-[#DADADA] mt-5">
              Digital Conference Of IT Tech Events in 2020 Home – Single Post
              Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi elit arcu, posuere…
            </p>
            <Button
              type={"button"}
              title={"Learn more"}
              className={"text-white mt-7"}
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
        <div className="mt-10  border-2 border-white">
          <Image
            src="/serious.jpg"
            alt=""
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-6">
            <h1 className="text-[25px] font-[700] text-white">
              Digital Conference Of IT Tech Events…
            </h1>
            <p className="text-[#DADADA] mt-5">
              Digital Conference Of IT Tech Events in 2020 Home – Single Post
              Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi elit arcu, posuere…
            </p>
            <Button
              type={"button"}
              title={"Learn more"}
              className={"text-white mt-7"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
