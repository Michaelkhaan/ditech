import Image from "next/image";
import react from "react";

const ThirdSection = () => {
  return (
    <div className="w-full h-96 text-white bg-[#010a0a] px-10 py-10">
      {/* <Image
        src="/Background-21.png"
        alt=""
        width={200}
        height={200}
        className="w-full aspect-square absolute top-0"
      /> */}
      <h1 className="text-[#00fbf4] text-base font-semibold">
        Welcome to Ditech
      </h1>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold text-center">
            Let Us Be Your <span className="text-[#00fbf4]">IT Partner</span>
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis faucibus ligula. Maecenas a purus massa. Ut elementum sem.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-center">19</h1>
          <p>Years of Experiences</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
