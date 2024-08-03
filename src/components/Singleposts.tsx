import Image from "next/image";
import React from "react";

export default function Singleposts() {
  return (
    <div
      className="w-full h-[50%]"
      style={{ backgroundImage: "url('/artificial.jpg')" }}
    >
      {/* <Image
        src="/artificial.jpg"
        alt=""
        width={100}
        height={100}
        objectFit="contain"
        className="w-full h-64"
      /> */}
      <div className="absolute">
        <h1 className="text-center text-4xl">
          Providing Top Quality Cleaning & Related Services Charms.
        </h1>
      </div>
    </div>
  );
}
