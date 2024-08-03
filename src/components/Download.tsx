import React from "react";
import { FaFilePdf } from "react-icons/fa";

export default function Download() {
  return (
    <div className="w-[25%] mt-5 px-[14px]">
      <h2 className="text-white text-[25px] font-[600]">Download</h2>
      <p className="text-[#DADADA]">
        Praesent sit amet malesuada erat. Sed id nunc at massa fermentum.
      </p>
      <div className="flex items-center gap-3 mt-8">
        <FaFilePdf className="text-[#00FBF4] text-[20px]" />
        <p className="text-white text-[18px] font-[600]">Brochure</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <FaFilePdf className="text-[#00FBF4] text-[20px]" />
        <p className="text-white text-[18px] font-[600]">Company Detai8</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <FaFilePdf className="text-[#00FBF4] text-[20px]" />
        <p className="text-white text-[18px] font-[600]">Customer Policies</p>
      </div>
    </div>
  );
}
