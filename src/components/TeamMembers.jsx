import React from "react";
import "./index.css";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const TeamMembers = () => {
  const data = [
    {
      img: "/assets/team1.jpg",
      title: "Kimberlee Garris",
      description: "Senior Consultant",
    },
    {
      img: "/assets/team2.jpg",
      title: "Winfred Locklear",
      description: "Consulting Lawyer",
    },
    {
      img: "/assets/team3.jpg",
      title: "Alexia Galvez",
      description: "Trainee Consultant",
    },
    {
      img: "/assets/team4.jpg",
      title: "Novella Shrader ",
      description: "Mortgage Advisor",
    },
    {
      img: "/assets/team5.jpg",
      title: "Kayleen Colbert",
      description: "Investment Advisor",
    },
  ];
  return (
    <>
      <div className="pt-28  ">
        <Slide direction="up" duration={1000} fraction={0}>
          <p className=" relative lg:text-6xl md:text-6xl sm:text-4xl  text-2xl text-center font-bold">
            Our Team Members
          </p>
        </Slide>
        <Slide direction="up" duration={1000} fraction={0}>
          <div className="flex justify-center ">
            <p className="text-center max-w-[55vw] mt-4  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt labore et dolore magna aliqua.
            </p>
          </div>
        </Slide>
      </div>

      <Fade direction="bottom" duration={800} fraction={0}>
        <div className="w-full pt-10 lg:px-4 md:px-4 sm:px-3 px-2 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 pb-28 ">
          {data?.map((item, index) => (
            <div key={index} className="card">
              <Slide direction="up" duration={1000} fraction={0}>
                <div className="one w-full h-full">
                  <Image
                    className="rounded-lg"
                    alt="cardImg"
                    src={`${item.img}`}
                    width={550}
                    height={550}
                    quality={100}

                    unoptimized={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Slide>
              <div className="card__content font-serif  ">
                <p className="card__title ">{item?.title}</p>
                <p className="card__description ">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </>
  );
};

export default TeamMembers;
