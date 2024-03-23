import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSec from "@/components/HeroSec";
import ThirdSection from "@/components/ThirdSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSec />
      {/* <ThirdSection /> */}
      <Footer />
    </>
  );
}
