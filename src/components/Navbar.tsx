/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

function Navbar() {
  const menuItems = [
    {
      title: "Home",
    },
    {
      title: "Services",
    },
    {
      title: "Case Studies",
      image: "/plus.png",
    },
    {
      title: "Page",
      image: "/plus.png",
    },
    {
      title: "Blog",
      image: "/plus.png",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <div>
      <nav className="bg-black px-5 flex flex-col sm:flex-row justify-between items-center py-3">
        <img src="/Logo-Ditech.png" alt="" className="w-64" />

        <ul className="hidden lg:flex items-center gap-8">
          {menuItems?.map((items, index) => (
            <li
              key={index}
              className="text-white text-xl tracking-wider font-medium hover:text-[#00fbf4] cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-1"
            >
              {items?.title}
              {items?.image ? (
                <img src={items?.image} alt="" className="w-3 h-3" />
              ) : null}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <img
            src="/hamburger.png"
            alt=""
            className="w-10 h-10 border-2 border-white p-2 block lg:hidden mr-24"
          />

          <Button type="button" title="Get Started" className="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
