import React from "react";
import Button from "./Button";
import Slider from "react-slick";
import Image from "next/image";

function HeroSec() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      img: "/young.jpg",
    },
    {
      img: "/two-female.jpg",
    },
  ];
  return (
    <div className="w-full bg-[#010a0a] bg-opacity-60 relative">
      <div className="absolute w-full h-full -z-20 overflow-hidden">
        <Slider {...settings}>
          {slideData?.map((e, index) => (
            <Image
              key={index}
              src={e?.img}
              alt=""
              width={100}
              height={100}
              objectFit="cover"
              className="w-full h-full"
            />
          ))}
        </Slider>
      </div>
      <div
        className="absolute w-full h-full -z-10"
        style={{
          backgroundImage: "url('/Background-6.png')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className=" w-full px-5 pt-10 min-h-[500px]">
        <h1 className="lg:text-8xl font-bold lg:w-[1000px] tracking-widest ">
          <span className="text-white">Creating a Better</span>{" "}
          <span className="text-[#00fbf4]">IT Solutions.</span>
        </h1>
        <p className="lg:text-lg lg:w-[900px] mt-8 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          faucibus ligula. Maecenas a purus massa. Ut elementum sem mauris, ut
          venenatis tortor congue et. Ut et dolor massa.
        </p>
        <Button type="button" title="Contact Us" className="mt-8" />
      </div>
    </div>
  );
}

export default HeroSec;
