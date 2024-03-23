import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSec from "@/components/HeroSec";
import ThirdSection from "@/components/ThirdSection";
import Card from "@/components/Card";
import { FaArrowRight } from "react-icons/fa";
import Companies from "@/components/Companies";
import ChooseUS from "@/components/ChooseUS";
import CaseStudies from "@/components/CaseStudies";
import Section from "@/components/Section";
import RequestSection from "@/components/RequestSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cardData = [
    {
      imageSrc: "/Icon3.png",
      icon: FaArrowRight,
      title: "Data Center",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
    {
      imageSrc: "/Icon2.png",
      icon: FaArrowRight,
      title: "Cloud Services",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
    {
      imageSrc: "/Icon3.png",
      icon: FaArrowRight,
      title: "IT Management",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
    {
      imageSrc: "/Icon3.png",
      icon: FaArrowRight,
      title: "Cyber Security",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
  ];
  return (
    <>
      <img className="fixed -z-50" src="/Background-21.png " alt="" />
      <Navbar />
      <HeroSec />
      <ThirdSection />
      <div className="w-full flex flex-wrap justify-between items-center px-10 bg-[#010a0a]  pb-10">
        {cardData.map((item, index) => {
          return (
            <div key={index} className="lg:w-1/4 px-4 md:w-1/2 w-full py-6">
              <Card
                imageSrc={item.imageSrc}
                Icon={item.icon}
                title={item.title}
                desc={item.desc}
                className=""
              />
            </div>
          );
        })}
      </div>
      <Companies />
      <ChooseUS />
      <CaseStudies />
      <Section />
      <RequestSection />
      <Footer />
    </>
  );
}
