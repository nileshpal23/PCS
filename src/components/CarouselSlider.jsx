"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../components/ui/carousel";
import { Slide } from "react-awesome-reveal";

const CarouselSlider = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const carouselData = [
    {
      img: "/assets/GRB_Logo.png",
    },
    // {
    //   img: "/assets/logo2.png",
    // },
    // {
    //   img: "/assets/logo3.png",
    // },
    // {
    //   img: "/assets/logo4.png",
    // },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size and update state
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <Slide direction="up" duration={1000}>
      <div className="lg:px-20 md:px-20 lg:pt-20 md:pt-20 p-2 grid lg:grid-cols-[40%_60%]">
        <div className="lg:ps-24 md:ps-24 sm:ps-20 ps-4 pt-10 text-6xl font-bold font-serif">
          Our Trusted Clients.
        </div>
        <div className="lg:m-20 md:m-20 sm:m-16 m-10">
          {isLargeScreen ? (
            <Carousel
              plugins={[plugin.current]}
              opts={{
                loop: true,
                align: "center",
              }}
              className="w-full max-w-lg"
            >
              <CarouselContent>
                {carouselData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 flex justify-center items-center">
                      <Image
                        src={item.img}
                        alt={`logo-${index}`}
                        width={90}
                        height={90}
                        unoptimized={true}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <Carousel
              plugins={[plugin.current]}
              opts={{
                loop: true,
                align: "center",
              }}
              className="w-full max-w-xs"
            >
              <CarouselContent>
                {carouselData.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="px-5">
                      <Image
                        src={item.img}
                        alt={`logo-${index}`}
                        width={90}
                        height={90}
                        unoptimized={true}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>
      </div>
      </Slide>
    </>
  );
};

export default CarouselSlider;
