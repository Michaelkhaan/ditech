import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";

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
      subtitleItems: [{ title: "Case Studies" }, { title: "Case Details" }],
    },
    {
      title: "Page",
      image: "/plus.png",
      subtitleItems: [
        { title: "About" },
        { title: "Our Team" },
        { title: "Pricing" },
        { title: "FAQ" },
        { title: "404" },
      ],
    },
    {
      title: "Blog",
      image: "/plus.png",
      subtitleItems: [{ title: "Blog Archieve" }, { title: "Single Post" }],
    },
    {
      title: "Contact",
    },
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index: any) => {
    if (menuItems[index].subtitleItems) {
      setDropdownVisible(true);
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setActiveDropdown(null);
  };

  return (
    <div>
      <nav className="bg-black px-5 flex flex-col sm:flex-row justify-between items-center py-3">
        <Image
          src="/Logo-Ditech.png"
          alt=""
          width={65}
          height={65}
          className="w-64"
        />

        <ul className="hidden lg:flex items-center gap-8">
          {menuItems?.map((items, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-white text-xl tracking-wider font-medium hover:text-[#00fbf4] cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-1">
                {items?.title}
                {items?.image ? (
                  <Image
                    src={items?.image}
                    alt=""
                    width={5}
                    height={5}
                    className="w-3 h-3"
                  />
                ) : null}
              </div>
              {dropdownVisible && activeDropdown === index && (
                <ul className="w-52 border-l border-r border-b px-10 py-4 absolute -left-4 bg-[#010a0a] bg-opacity-70 z-50">
                  {items?.subtitleItems?.map((subtitleItem, index) => (
                    <li
                      key={index}
                      className="text-white text-lg tracking-wider font-bold hover:text-[#00fbf4] cursor-pointer transition-all duration-300 ease-in-out py-1 whitespace-nowrap "
                    >
                      {subtitleItem?.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Image
            src="/hamburger.png"
            alt=""
            width={10}
            height={10}
            className="w-10 h-10 border-2 border-white p-2 block lg:hidden mr-24"
          />

          <Button type="button" title="Get Started" className="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
