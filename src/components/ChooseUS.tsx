import React from "react";
import Card from "./Card";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function ChooseUS() {
  const cardData = [
    {
      image: require("../../public/Isometric-1.png"),
      title: "Secure Database",
      desc: "Data Base",
    },
    {
      image: require("../../public/Isometric-2.png"),
      title: "Performance Speed",
      desc: "Performance",
    },
  ];
  return (
    <div className="bg-[#010a0a] w-full px-10 flex flex-col md:flex-row justify-between items-center py-28">
      <div className="">
        <h1 className="text-[#00FBF4] text-lg font-medium">Why Choose Us</h1>
        <p className="text-white text-3xl md:text-6xl font-extrabold md:w-[525px] mt-16">
          Our Goal is <span className="text-[#00FBF4]">Giving the Best</span>{" "}
          For <span className="text-[#00FBF4]">IT Services.</span>
        </p>
        <p className="text-[#DADADA] text-lg mt-12">
          Aliquam in tincidunt ipsum. Quisque lobortis ultrices ex ut
          ullamcorper. Donec vitae lacus vel ligula hendrerit viverra non non
          orci. Quisque sed tincidunt sapien. Maecenas gravida at velit feugiat
          vulputate. Etiam quam orci, condimentum ut justo et, consequat
          ultrices diam.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 pl-10">
        {cardData?.map((e, index) => (
          <div
            key={index}
            className="bg-[#000303] px-12 py-10 w-full sm:min-w-[307px]"
          >
            <div className="flex justify-center w-full">
              <Image
                src={e?.image}
                alt=""
                width={200}
                height={200}
                className=""
              />
            </div>
            <h1 className="text-[#DADADA] text-base mt-12">{e?.title}</h1>
            <p className="text-[#00fbf4] text-3xl font-bold mt-12">{e?.desc}</p>
            <FaArrowRight className="text-[#DADADA] hover:text-[#00FBF4] cursor-pointer transition-all duration-500 hover:w-8 hover:h-8 w-10 h-10 mt-12" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUS;
