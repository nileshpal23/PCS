"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import OdometerComponent from "../components/Odometer";
import { Card, CardContent } from "../components/ui/card";

export function CardWithImage({ cardImg, clientDiv }) {
  return (
    <>
      <Card className="w-full pb-10  dark:border dark:border-gray-800">
        <CardContent className="h-full">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full h-full">
            <Slide direction="up" duration={800} triggerOnce={true}>
              <div className="relative w-full h-[65vh] mt-7">
                <Image
                  className="rounded-lg"
                  alt="cardImg"
                  src={`${cardImg}`}
                  fill
                  objectFit="cover"
                  quality={100}
                  sizes="100vw"
                  priority="true"
                  unoptimized={true}
                />
              </div>
            </Slide>
            <div className="p-4">
              <Slide direction="up" duration={800}>
                <p className="text-2xl md:text-4xl font-bold font-serif mt-7 leading-10">
                  We Will Help You For Grow
                </p>
                <p className="text-2xl md:text-4xl font-bold font-serif leading-4 text-orange-800">
                  Business.
                </p>
              </Slide>
              <Slide direction="up" duration={800}>
                <p className="mt-9 text-xl font-serif">
                  PCS is a provider of innovative software solutions for
                  businesses across industries. With a dedicated team of skilled
                  developers,
                  <span className="font-bold">
                    {" "}
                    we specialize in creating cutting-edge applications and
                    tailored software to streamline operations, enhance
                    productivity, and drive digital transformation.{" "}
                  </span>
                </p>
              </Slide>
              {clientDiv && (<Slide direction="up" duration={1300}>
                <div className="mt-5 p-4 bg-gray-200 sm:w-72 w-54 border-4 border-l-orange-700 font-serif flex font-bold">
                  <div className="relative ps-2 pt-2">
                    <Image
                      className=""
                      alt="cardImg"
                      src="/assets/group-chat.png"
                      width={50} // Adjusted size for a better fit
                      height={50} // Adjusted size for a better fit
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                    <div className="font-bold text-3xl ps-4 ">
                      <div className="font-bold text-3xl flex">
                        <OdometerComponent value={100} />
                        <span className="font-extrabold text-3xl text-orange-700">
                          &nbsp;+
                        </span>
                      </div>
                      <div className="font-bold text-lg ">Happy Customers</div>
                    </div>
                </div>
              </Slide>)}
              
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
