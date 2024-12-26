"use client";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import "./index.css";
import { Card, CardContent } from "./ui/card";
import { Slide, Fade } from "react-awesome-reveal";

const AboutUs = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const carouselData = [
    {
      img: "/assets/about1.jpg",
      name: "Alexia Galvez",
      domain: "Trainee Consultant",
      description:
        "If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text. All the on the internet tend to repeat predefined chunks as necessary, making this the first.",
    },
    {
      img: "/assets/about2.jpg",
      name: "Kayleen Colbert",
      domain: "Investment advisor",
      description:
        "If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text. All the on the internet tend to repeat predefined chunks as necessary, making this the first.",
    },
    {
      img: "/assets/about3.jpg",
      name: "Kayleen Colbert",
      domain: "Consulting Lawyer",
      description:
        "If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text. All the on the internet tend to repeat predefined chunks as necessary, making this the first.",
    },
  ];
  return (
    <>
      <div className="mb-48">
        <div className="mt-32">
          <div className="flex justify-center">
            <p className="text-5xl font-bold text-center">What Clients Say</p>
          </div>
          <div className="flex justify-center mt-3 text-orange-700 ">
            <p className="text-5xl font-bold text-center">About Us!</p>
          </div>
          <div className="flex justify-center mt-8">
            <p className="max-w-[52vw] text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
              ad minim veniam
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-20     ">
          <Carousel
            className="w-[80vw] h-96"
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent>
              {carouselData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card className="rounded-none font-serif  dark:border dark:border-gray-800">
                      <CardContent className=" p-6 ">
                        <Quote
                          width={32}
                          height={32}
                          className="text-white  ml-[96.4%]   text-2xl"
                        />
                        <div className=" lg:ml-[92.6%] md:ml-[88.4%] sm:ml-[83.2%] ml-[80.4%] mt-[-9rem] w-28 h-44 bg-orange-700 bottom-left"></div>
                        <Slide direction="up" duration={900} fraction={0}>
                          <div className="px-5 flex relative items-center justify-center mt-[-5rem] ">
                            <Image
                              className="rounded-full "
                              src={item.img}
                              alt={`logo-${index}`}
                              width={90}
                              height={90}
                              unoptimized={true}
                            />
                          </div>
                        </Slide>
                        <Slide direction="up" duration={900} fraction={0}>
                          <div className="text-center  font-bold text-2xl mt-4">
                            {item?.name}
                          </div>
                        </Slide>
                        <Slide direction="up" duration={900} fraction={0}>
                          <div className="text-center text-orange-600 mt-3 ">
                            {item?.domain}
                          </div>
                        </Slide>
                        <Slide direction="up" duration={900} fraction={0}>
                          <div className="text-center mt-4 mb-10 ">
                            {item?.description}
                          </div>
                        </Slide>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
