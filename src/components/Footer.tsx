import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { CiClock1, CiTwitter } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import Button from "./Button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#0D1B1B] pb-6">
      <div className=" flex flex-wrap px-10">
        <div className="w-full md:w-1/5">
          <Image src="/Logo-Ditech.png" alt="" width={300} height={150} />
          <p className="text-white mt-5">
            Proin velit augue, rutrum sed fringilla ac, congue id lorem. Sed
            feugiat sed nisl sed ultrices.{" "}
          </p>
        </div>
        <div className="w-1/5 pl-10">
          <h5 className="text-[#00FBF4] p-3 text-2xl">Company</h5>
          <ul className="text-white mt-2">
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4] ">
              About Us
            </li>
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4] leading-10">
              Our Team
            </li>
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4]">
              Services
            </li>
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4] leading-10">
              Pricing
            </li>
          </ul>
        </div>
        <div className="w-1/5">
          <h5 className="text-[#00FBF4] p-3 text-2xl">Solutions</h5>
          <ul className="text-white leading-8 mt-2">
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4]">
              IT Management
            </li>
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4]">
              Cloud Services
            </li>
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4]">
              Data Center
            </li>
            <li className="pl-3 cursor-pointer hover:text-[#00FBF4]">
              Software Development
            </li>
          </ul>
        </div>
        <div className="w-1/5 leading-8">
          <h5 className="text-[#00FBF4] p-3 text-2xl">Contac Info</h5>
          <div className="flex items-center gap-3 pl-3 mt-2">
            <LuMapPin className="text-[#00FBF4] w-5 h-5" />
            <p className="text-white">99, Roving St., Big City</p>
          </div>
          <div className="flex items-center gap-3 pl-3">
            <CiClock1 className="text-[#00FBF4] w-5 h-5" />
            <p className="text-white">08.00 - 17.00 Pm</p>
          </div>
          <div className="flex items-center gap-3 pl-3">
            <BiPhoneCall className="text-[#00FBF4] w-5 h-5" />
            <p className="text-white">+123-1234-1234</p>
          </div>
          <div className="flex items-center gap-3 pl-3">
            <BsEnvelope className="text-[#00FBF4] w-5 h-5" />
            <p className="text-white">hello@awesomesite.com</p>
          </div>
        </div>
        <div className="w-1/5">
          <h5 className="text-[#00FBF4] mb-2 p-3 text-2xl">Subscribe</h5>
          <input
            type="email"
            placeholder="Your Email... "
            className="border-2 p-2 px-4 border-white bg-black hover:bg-[#0D1B1B] mb-4"
          />
          <button
            className={`border-2 hover:border-[#00fbf4] px-10 py-2 hover:text-[#00fbf4] text-xl font-medium whitespace-nowrap hover:bg-transparent  text-black bg-white  transition-all duration-75 mb-4`}
            type="button"
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <hr className="width={} height={} w-[95%] mx-auto mt-12 " />
      <div className="  flex mt-5 gap-3 justify-between px-14 ">
        <div className="flex gap-3">
          <div className="rounded-full bg-white h-[35px] w-[35px] flex items-center justify-center hover:bg-[#0D1B1B] cursor-pointer">
            <FaFacebookF className="text-[#00FBF4] text-[20px] hover:text-white" />
          </div>
          <div className="rounded-full bg-white h-[35px] w-[35px] flex items-center justify-center hover:bg-[#0D1B1B] cursor-pointer">
            <FaTwitter className="text-[#00FBF4] text-[20px] hover:text-white " />
          </div>

          <div className="rounded-full bg-white h-[35px] w-[35px] flex items-center justify-center hover:bg-[#0D1B1B] cursor-pointer">
            <FaLinkedinIn className="text-[#00FBF4] text-[20px] hover:text-white " />
          </div>
          <div className="rounded-full bg-white h-[35px] w-[35px] flex items-center justify-center hover:bg-[#0D1B1B] cursor-pointer">
            <FaYoutube className="text-[#00FBF4] text-[20px] hover:text-white " />
          </div>
        </div>
        <div className="">
          <p className="text-white">
            © Copyright 2022. All Rights Reserved. Rometheme
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
