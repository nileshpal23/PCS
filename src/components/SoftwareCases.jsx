"use client";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const SoftwareCases = () => {
  const data = [
    {
      img: "/assets/homeland.jpg",
      title: "HOMELAND SOLUTION",
      description: "Mortgage Advisor",
    },
    {
      img: "/assets/business.jpg",
      title: "BUSINESS SOLUTION",
      description: "Online Consulting",
    },
    {
      img: "/assets/homeland.jpg",
      title: "CORPORATE SERVICES",
      description: "Financial Consulting",
    },
  ];
  return (
    <>
      <div className="relative z-10">
        <div
          className="triangle"
          style={{
            borderBottom: "9rem solid transparent",
            borderRight: "9rem solid transparent",
            borderLeft: "9rem solid #9A3412",
          }}
        ></div>
      </div>
      <div
        className="font-serif"
        style={{ marginTop: "-9rem", backgroundColor: "#292929" }}
      >
        <div className="pt-28  ">
          <Slide direction="up" duration={1000} fraction={0}>
            <p className=" z-40 relative lg:text-6xl md:text-6xl sm:text-4xl  text-2xl text-white text-center font-bold">
              Consultancy Cases
            </p>
          </Slide>
          <Slide direction="up" duration={1200} fraction={0}>
            <div className="flex justify-center ">
              <p className="text-center max-w-[60vw] mt-4 text-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
                ad minim veniam
              </p>
            </div>
          </Slide>
        </div>
        <div className="w-full pt-10 lg:px-40 md:px-40 sm:px-32 px-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pb-28 ">
          {data?.map((item, index) => (
            <div key={index} className="">
              <div className=" w-full h-full">
                <Fade direction="bottom" duration={5000} fraction={0}>
                    <div className="relative mt-7">
                      <Image
                        className="rounded-lg"
                        alt="cardImg"
                        src={`${item.img}`}
                        width={350}
                        height={350}
                        quality={100}
                        unoptimized={true}
                      />
                    </div>
                </Fade>
                <div className="p-4">
                  <Slide direction="up" duration={1200} fraction={0}>
                    <p className="text-sm text-orange-700 font-bold font-serif mt-7 leading-10">
                      {item?.title}
                    </p>
                  </Slide>
                  <Slide direction="up" duration={1200} fraction={0}>
                    <p className="text-2xl text-white font-bold font-serif  leading-10">
                      {item?.description}
                    </p>
                  </Slide>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Imp */}
      <style jsx>{`
        .triangle {
          position: relative;
        }
        .triangle:before {
          content: "";
          position: absolute;
          top: 6px; /* Positioning the shadow to match the triangle */
          left: -8.7rem;
          width: 0;
          height: 0;
          border-bottom: 9rem solid transparent;
          border-right: 9rem solid transparent;
          border-left: 9rem solid #f6ebe736; /* Light orange color with opacity */
          box-shadow: inset -10px 0 10px -5px #9a3412; /* Adjust for inner shadow */
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default SoftwareCases;
