import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Singleposts from "@/components/Singleposts";
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaPencilAlt,
  FaQuoteRight,
  FaRegCommentAlt,
} from "react-icons/fa";

function index() {
  return (
    <div className="w-full bg-black">
      <Singleposts />
      <div className="flex">
        <div className=" w-[70%] px-8">
          <Image
            src="software.jpg"
            alt=""
            width={100}
            height={100}
            className="w-[100%]  mt-4"
          />
          <div className="flex mt-5  gap-11">
            <div className="flex items-center gap-3">
              <FaPencilAlt className="text-[#00FBF4]" />
              <p className="text-white ">Deka</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-[#00FBF4]" />
              <p className=" text-white">August 20,2022</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaRegCommentAlt className="text-[#00FBF4]" />
              <p className="text-white">0 Comment</p>
            </div>
          </div>
          <p className="text-white mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit
            arcu, posuere eu ipsum eu, interdum commodo purus. In nunc diam,
            mollis quis pulvinar nec, vehicula non arcu. Maecenas id interdum
            mi. Suspendisse in dui fringilla orci semper feugiat. Nam lorem
            nibh, placerat vel tincidunt et, consectetur eget arcu. Mauris a
            nibh ut mi porta efficitur. Praesent sit amet malesuada erat. Sed id
            nunc at massa fermentum scelerisque porttitor vel erat.{" "}
          </p>
          <div className="flex mt-10 ">
            <div className="w-[20%] px-14">
              <FaQuoteRight className="text-[#00FBF4] text-6xl" />
            </div>
            <div>
              <p className="text-white">
                Cras ac congue arcu. Nunc vitae porttitor lectus. Vestibulum id
                justo vitae est rutrum tempus eget sit amet nisi. Aenean ex
                urna, fringilla sed enim quis, maximus mattis tortor. Praesent
                tincidunt pellentesque dapibus.{" "}
              </p>
            </div>
          </div>
          <p className="text-white mt-10 mb-36">
            Proin eget lacus mattis, aliquet lorem viverra, placerat nisl. Sed
            rutrum erat laoreet, suscipit tellus nec, pretium velit. Integer ac
            laoreet elit. Aliquam erat volutpat. Vestibulum fringilla dolor ut
            faucibus scelerisque. Nullam mattis neque id libero condimentum,
            quis fringilla metus porta. Aliquam rhoncus vulputate metus, eget
            varius est. Donec semper nunc nec molestie ullamcorper. Etiam
            molestie, elit scelerisque accumsan imperdiet, neque tellus lacinia
            diam, ut venenatis ipsum purus a erat.
          </p>
        </div>
        <Download />
      </div>
      <Footer />
    </div>
  );
}

export default index;
