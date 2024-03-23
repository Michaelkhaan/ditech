import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Companies() {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const image = [
    {
      image: "/Logo-Youseo-10.png",
    },
    {
      image: "/logo-3.png",
    },
    {
      image: "/Logo-Digious.png",
    },
    {
      image: "/Logo-Youseo-10.png",
    },
    {
      image: "/logo-3.png",
    },
    {
      image: "/Logo-Digious.png",
    },
  ];

  return (
    <div className="w-full bg-[#091616] md:flex justify-between items-center px-8 md:px-20 py-8 md:py-40">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-24">
        <Slider {...settings}>
          {image.map((e, index) => (
            <div className="w-full flex items-center" key={index}>
              <Image src={e.image} alt="" width={200} height={200} />
            </div>
          ))}
        </Slider>
        <Slider {...settings}>
          {image.map((e, index) => (
            <div className="w-full" key={index}>
              <Image src={e.image} alt="" width={200} height={200} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full lg:w-1/3">
        <h1 className="text-white text-xl md:text-2xl lg:text-5xl lg:w-[410px] lg:leading-[70px] font-bold">
          Trusted By <span className="text-[#00fbf4]">1,790+</span>{" "}
          {`World's Leading`}{" "}
          <span className="text-[#00fbf4]">IT Companies.</span>
        </h1>
        <p className="text-white mt-4 md:mt-10">
          Consectetur adipiscing elit. Maecenas quis faucibus ligula. Maecenas a
          purus massa. Ut elementum sem.
        </p>
      </div>
    </div>
  );
}

export default Companies;
