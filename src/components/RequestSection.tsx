import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Button from "./Button";

function RequestSection() {
  const data = [
    {
      title: "We are committed to providing quality IT Services",
    },
    {
      title: "We are committed to providing quality IT Services",
    },
    {
      title: "We are committed to providing quality IT Services",
    },
    {
      title: "We are committed to providing quality IT Services",
    },
  ];
  return (
    <div
      className="w-full absolute bg-[#010a0a] pb-6 flex justify-between items-center"
      // style={{
      //   backgroundImage: "url('/Overlay4.png')",
      //   backgroundSize: "cover",
      //   width: "50%",
      //   height: "50%",
      // }}
    >
      <div className="w-full flex justify-between items-center px-10">
        <div className="w-1/2">
          <h1 className="text-white text-5xl font-bold w-[600px] leading-[70px]">
            We Are <span className="text-[#00FBF4]">Perfect Solutions</span> For{" "}
            <span className="text-[#00FBF4]">Your Business</span>
          </h1>
          <p className="text-white mt-6">
            Donec vitae lacus vel ligula hendrerit viverra non non orci. Quisque
            sed tincidunt sapien. Maecenas gravida at velit feugiat vulputate.
          </p>
          <div className="mt-8">
            {data?.map((e, index) => (
              <div key={index} className="flex items-center gap-4">
                <IoMdCheckmark className="text-[#00FBF4] text-xl" />
                <p className="text-white font-semibold">{e?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 mt-20">
          <form className="w-full flex flex-wrap gap-y-5">
            <div className="w-1/2 px-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border text-whitex border-white px-3 py-3 outline-none cursor-pointer hover:bg-[#00FBF4] hover:bg-opacity-20 hover:border-[#00FBF4]"
              />
            </div>
            <div className="w-1/2 px-2">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full bg-transparent border text-white border-white px-3 py-3 outline-none cursor-pointer hover:bg-[#00FBF4] hover:bg-opacity-20 hover:border-[#00FBF4]"
              />
            </div>
            <div className="w-1/2 px-2">
              <input
                type="text"
                placeholder="Inquire"
                className="w-full bg-transparent border border-white px-3 py-3 outline-none"
              />
            </div>
            <div className="w-1/2 px-2">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full bg-transparent border text-white border-white px-3 py-3 outline-none cursor-pointer hover:bg-[#00FBF4] hover:bg-opacity-20 hover:border-[#00FBF4]"
              />
            </div>
            <textarea
              name=""
              id=""
              className="w-full outline-none text-white px-3 py-1 bg-transparent border border-white cursor-pointer hover:bg-[#00FBF4] hover:bg-opacity-20 hover:border-[#00FBF4]"
            ></textarea>
          </form>
          <div className="w-full flex justify-end mt-4 px-8">
            <Button type={"button"} title={"Submit request"} className={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestSection;
