// import BlogArchives from "@/components/BlogArchives";
// import Cards from "@/components/Cards";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import React from "react";

// export default function index() {
//   return (
//     <div>
//       <Navbar />
//       <div className="w-full bg-black">
//         <BlogArchives />
//         <div className="w-full">
//           <h1 className="text-white text-2xl font-bold text-center">Blog</h1>
//           <p className="text-white text-2xl font-bold text-center mt-20">
//             Latest News & Articles
//           </p>
//           <Cards />
//         </div>
//       </div>
//       <Footer />
//       {/* <BlogArchives /> */}
//       {/* <div>
//         <div>
//           <h1>Blog</h1>
//           <p>Latest News & Articles</p>
//         </div>
//         <Cards />
//       </div> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

import BlogArchives from "@/components/BlogArchives";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function index() {
  return (
    <div>
      <Navbar />
      {/* <BlogArchives /> */}
      <div className="w-full ">
        <div className=" w-full bg-[#0D1B1B]">
          <h1 className="text-center text-[#00FBF4] font-[600]"> Our Blog</h1>
          <div className="w-full flex flex-wrap justify-center text-center  ">
            <p className=" mt-4 text-[#00FBF4] text-7xl font-[700]">
              <span className="text-white px-3">Latest</span>
              News & Articles
            </p>
          </div>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default index;
