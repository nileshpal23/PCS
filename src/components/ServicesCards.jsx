"use client";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import { Fade, Slide } from "react-awesome-reveal";
import React from "react";
const ServicesCards = () => {
  const data = [
    {
      img: "/assets/group-chat.png",
      title: "Software Solutions",
      description:
        "Custom software development, web and mobile applications, cloud solutions, and enterprise software integration to streamline your operations and enhance productivity.",
    },
    {
      img: "/assets/lawyer.png",
      title: "IoT Solutions",
      description:
        "Innovative Internet of Things (IoT) solutions, including sensor networks, data analytics, and smart device integration to transform your business processes and decision-making.",
    },
    {
      img: "/assets/environment.png",
      title: "End-to-End Product Development",
      description:
        "Comprehensive product development services from ideation to market launch, including prototyping, testing, and continuous improvement to bring your vision to life.",
    },
    {
      img: "/assets/planning.png",
      title: "Tech Consulting",
      description:
        "Expert guidance on technology strategy, digital transformation, and innovation roadmaps to help you navigate the rapidly evolving tech landscape.",
    },
    {
      img: "/assets/industry1.png",
      title: "Industrial Automation",
      description:
        "Streamlined automation solutions to enhance productivity, optimize processes, and integrate smart manufacturing practices for improved efficiency and output.",
    }
  ];

  return (
    <>
      <Fade direction="bottom" duration={1000} fraction={0}>
        <div className="pb-16 "> 
          <Slide direction="up" duration={1200}>
            <div className="pt-16">
              <p className="text-6xl text-center font-bold font-serif">
                Services We Offer.
              </p>
            </div>
          </Slide>
          <Slide direction="up" duration={1100}>
            <div className="w-full flex justify-center text-center">
              <p className="text-center max-w-[60vw] mt-4">
                We provide a comprehensive range of custom software solutions designed to meet your unique business needs and goals. From initial consulting and development to implementation and ongoing support.
              </p>
            </div>
          </Slide>
          <div className="lg:mx-40 md:mx-32 mx-12 my-10 mt-14 font-serif">
            <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 ">
              {data?.map((item, index) => (
                <React.Fragment key={index}>
                  <Slide key={index} direction="up" duration={800}>
                    <Card className=" dark:border dark:border-gray-800 ">
                      <CardContent className="h-full">
                        <div className="w-full h-full lg:p-8 md:p-4 sm:p-6 p-6">
                          <Slide direction="up" duration={1100}>
                            <div className="relative mt-7">
                              <Image
                                className=""
                                alt="cardImg"
                                src={item.img}
                                width={50} // Adjusted size for a better fit
                                height={50} // Adjusted size for a better fit
                                quality={100}
                                unoptimized={true}
                              />
                            </div>
                          </Slide>
                          <Slide direction="up" duration={1200}>
                            <div className="mt-4 text-2xl font-bold">
                              {item.title}
                            </div>
                          </Slide>
                          <Slide direction="up" duration={1300}>
                            <div className="mt-3 text-lg ">
                              {item.description}
                            </div>
                          </Slide>
                        </div>
                      </CardContent>
                    </Card>
                  </Slide>
                  {/* {(index + 1) % 3 === 0 && index !== data.length - 1 && (
                    <div className="hidden md:block w-full h-1  col-span-full">
                      <Fade direction="bottom" duration={2000} fraction={0}>
                        <div className=" w-full h-1 bg-orange-700 col-span-full"></div>
                      </Fade>
                    </div>
                  )} */}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ServicesCards;
