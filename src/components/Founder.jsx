/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { Card, CardContent } from "../components/ui/card";

export default function FounderCard() {
  return (
    <Card className="w-full pb-10 dark:border dark:border-gray-800">
      <CardContent className="h-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] md:grid-cols-1 grid-cols-1 w-full h-full gap-6">
          {/* Founder Image */}
          <Slide direction="up" duration={800} triggerOnce={true}>
            <div className="relative w-full h-[50vh] md:h-[40vh] mt-5 md:mt-7 lg:ps-10 md:ps-8 sm:ps-5">
              <Image
                className="rounded-lg object-cover"
                alt="Portrait of Nilesh Pal, Founder & CEO"
                src="/assets/nilesh.jpg" // Replace with the actual path
                // fill
                width ={350}
                height={350}
                quality={100}
                // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

                priority
                unoptimized
              />
            </div>
          </Slide>

          {/* Founder Information */}
          <div className="p-4">
            <Slide direction="up" duration={800}>
              <p className="text-xl md:text-3xl lg:text-4xl font-bold font-serif mt-5 md:mt-7 sm:mt-4 leading-tight md:leading-10">
                Meet Our Founder & CEO
              </p>
              <p className="text-xl md:text-3xl lg:text-4xl font-bold font-serif leading-4 text-orange-800">
                Nilesh Pal
              </p>
            </Slide>
            <Slide direction="up" duration={800}>
              <p className="mt-6 md:mt-9 text-lg md:text-xl font-serif">
                With over 5+ years of experience in  IoT solutions, software development and product innovation. 
                Nilesh Pal is the driving force behind Pal Consultancy Services. His visionary leadership and technical 
                expertise have been instrumental in launching our company as a fresh, innovative player in the tech consultancy space in 2023.
                <span className="font-bold"> Throughout his career, he has successfully led numerous high-profile projects, consistently delivering exceptional results that drive business growth and digital transformation.</span>
              </p>
            </Slide>
          </div>
        </div>

        {/* Quotation Section */}
        <Slide direction="up" duration={800}>
          <blockquote className="mt-10 px-4 md:px-6 py-4 text-center border-l-4 border-orange-600 text-lg md:text-xl font-serif italic text-gray-700 bg-gray-100 rounded-lg">
            "As a new entrant in the tech consultancy arena, we're bringing fresh perspectives and innovative approaches to the table. Our mission at Pal Consultancy Services is to leverage my years of industry experience, our team's agility, and cutting-edge technological expertise to empower businesses in this exciting era of digital transformation."
          </blockquote>
        </Slide>
      </CardContent>
    </Card>
  );
}
