import react from "react";
import Image from "next/image";
import LineWithAnimation from "./LineWithAnimation";

const ThirdSection = () => {
  const lineWithAnimation = [
    {
      title: "WorkFlow Managment",
      percentage: "69%",
    },
    {
      title: "IT Practice in Cloud",
      percentage: "58%",
    },
    {
      title: "Software For Financial",
      percentage: "75%",
    },
  ];
  return (
    <div className="w-full text-white bg-[#010a0a] px-10 py-10 relative">
      <h1 className="text-[#00fbf4] text-base font-semibold">
        Welcome to Ditech
      </h1>
      <div className="flex-col flex md:flex-row justify-between gap-20 mt-6">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold lg:w-[500px]">
            Let Us Be Your <span className="text-[#00fbf4]">IT Partner</span>
          </h1>
          <p className="text-base mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis faucibus ligula. Maecenas a purus massa. Ut elementum sem.
          </p>
          <div className="mt-10">
            {lineWithAnimation?.map((item, index) => (
              <LineWithAnimation
                key={index}
                text={item?.title}
                percentage={item?.percentage}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex-col sm:flex-row flex justify-center gap-10 items-center">
            <div>
              <h1 className="text-center text-7xl font-bold text-[#00fbf4]">
                19+
              </h1>
              <p className="text-xl font-semibold mt-2">Years of Experiences</p>
            </div>
            <div>
              <h1 className="text-center text-7xl font-bold text-[#00fbf4]">
                165K
              </h1>
              <p className="text-2xl font-semibold mt-2">Projected Completed</p>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              src="/artificial.jpg"
              alt=""
              width={100}
              height={100}
              className="w-full aspect-[497/240] mt-20"
            />
            <div className="bg-[#00fbf4] w-20 h-20 rounded-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 hover:bg-transparent animate-pulse">
              <Image
                src="/play.png"
                alt=""
                width={45}
                height={45}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
