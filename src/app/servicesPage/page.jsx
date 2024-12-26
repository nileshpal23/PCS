"use client";
import Image from "next/image";
import { useRef } from "react";
import { Slide } from "react-awesome-reveal";

const Service = () => {
  const softwareDevelopmentRef = useRef(null);
  const techConsultingRef = useRef(null);
  const productDevelopmentRef = useRef(null);
  const iotSolutionsRef = useRef(null);

  // Scroll to the section when the sidebar button is clicked
  const handleScroll = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Slide direction="up" duration={1000} fraction={0} triggerOnce={true}>
        <div className="font-serif h-[90vh] bgImage" style={{ marginTop: "" }}>
          <div className="z-20 sm:pt-40 pt-24 relative flex justify-center font-serif">
            <div className="grid sm:grid-cols-2 grid-cols-1 relative z-10">
              <div className="h-full">
                <Slide direction="up" duration={900} fraction={0}>
                  <h1 className="md:text-7xl sm:text-4xl text-4xl text-center font-bold mb-8 text-white">
                    Service Details
                  </h1>
                </Slide>
                <Slide direction="up" duration={1000} fraction={0}>
                  <p className="text-white max-w-lg mx-auto my-2 text-2xl text-center">
                    Home{" "}
                    <span className="text-orange-600 hover:text-white">::</span>{" "}
                    Service
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div
            className="triangle"
            style={{
              borderTop: "9rem solid transparent",
              borderRight: "9rem solid #292929",
              marginTop: "-9rem",
            }}
          ></div>
        </div>
      </Slide>
      <div  className="grid lg:grid-cols-[70%_30%] font-serif ">
        <div className="pt-20 lg:pl-36 md:px-24 sm:px-14 px-7 mb-20">
          
          <div ref={softwareDevelopmentRef}><Slide direction="up" duration={1000} fraction={0}>
            <p className="font-bold sm:text-5xl text-4xl">
              Software{" "}
              <span className="font-bold text-orange-700">
                Development.
              </span>
            </p>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <p className="mt-10">
              We provide a comprehensive range of custom software solutions
              designed to meet your unique business needs and goals. From
              initial consulting and development to implementation and ongoing
              support, our expert team specializes in delivering high-quality,
              scalable, and secure applications across multiple platforms. Our
              services include custom software development, responsive web and
              mobile applications, advanced cloud solutions, and seamless
              enterprise software integration. By leveraging the latest
              technologies, we aim to streamline your operations, enhance
              productivity, and drive growth. Whether you are looking to build a
              solution from scratch or improve your existing systems, our
              tailored approach ensures that each product aligns perfectly with
              your business strategy.
            </p>
          </Slide>
          </div>
          
          <Slide direction="up" duration={1000} fraction={0} triggerOnce={true}>
            <div className="relative pt-4">
              <Image
                className=""
                alt="cardImg"
                src="/assets/serviceImg.jpg"
                width={600}
                height={300}
                quality={100}
                unoptimized={true}
              />
            </div>
          </Slide>
          <div ref={techConsultingRef} className="mt-6">
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="mt-6">
              <Slide direction="up" duration={1000} fraction={0}>
                <p className="font-bold text-3xl">Tech Consulting</p>
              </Slide>
              <Slide direction="up" duration={1000} fraction={0}>
                <div className=" mt-3">
                  Our Tech Consulting services provide expert guidance to help
                  you shape and execute a technology strategy that drives
                  growth, innovation, and resilience. We specialize in aligning
                  digital transformation initiatives with your business goals,
                  leveraging emerging technologies, and creating innovation
                  roadmaps to empower you to stay competitive in a rapidly
                  evolving tech landscape. Our team brings extensive experience
                  across industries, offering insights and solutions that
                  address current challenges while anticipating future
                  opportunities. Whether you’re looking to enhance operational
                  efficiency, implement new technologies, or develop a robust IT
                  infrastructure, we’re here to help you build a sustainable,
                  forward-thinking strategy tailored to your unique needs.
                </div>
              </Slide>
            </div>
          </Slide>
          </div>
          <div ref={productDevelopmentRef} className="mt-6">
            <Slide direction="up" duration={1000} fraction={0}>
              <p className="font-bold text-3xl " >
                End-to-End Product Development.
              </p>
            </Slide>
            <Slide direction="up" duration={1000} fraction={0}>
              <div className=" mt-3">
                Our End-to-End Product Development services cover every phase of
                bringing a product from concept to market. From initial ideation
                and product strategy to detailed prototyping, rigorous testing,
                and seamless deployment, we provide a complete solution that
                turns your vision into a tangible, high-quality product. Our
                team collaborates closely with you at each step, ensuring that
                the product meets market demands, aligns with your goals, and
                exceeds quality standards. We also support continuous
                improvement, offering post-launch updates and optimizations to
                enhance functionality and user experience. With our holistic
                approach, we help you reduce time-to-market, mitigate risks, and
                deliver a product that resonates with your target audience.
              </div>
            </Slide>
          </div>
          <div ref={iotSolutionsRef} className="mt-6">
            <Slide direction="up" duration={1000} fraction={0}>
              <p className="font-bold text-3xl ">IoT Solutions</p>
            </Slide>
            <Slide direction="up" duration={1000} fraction={0} >
              <div className=" mt-3">
                Our IoT Solutions empower businesses to harness the full
                potential of the Internet of Things, driving efficiency,
                connectivity, and data-driven insights across operations. We
                specialize in developing robust IoT ecosystems that include
                sensor networks, smart device integration, and advanced data
                analytics tailored to your business needs. By connecting assets,
                monitoring in real time, and analyzing data streams, our
                solutions provide actionable insights that enhance
                decision-making and optimize processes. From initial planning
                and device deployment to secure data management and continuous
                monitoring, we support you at every step, enabling smarter,
                faster, and more informed business operations that respond to an
                ever-evolving market landscape.
              </div>
            </Slide>
          </div>
        </div>

        <div className="font-bold lg:text-start md:text-center sm:text-center text-center mb-20">
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="pt-20 px-2 font-bold text-3xl ">Our Services</div>
          </Slide>

          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex  lg:justify-start md:justify-center sm:justify-center justify-center">
              <div className="mt-10 w-64 p-4 ps-3 font-bold text-lg  service dark:text-black cursor-pointer" onClick={() => handleScroll(softwareDevelopmentRef)}>
                Software Development
              </div>
            </div>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center ">
              <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg  service dark:text-black cursor-pointer" onClick={() => handleScroll(techConsultingRef)}>
              Tech Consulting
              </div>
            </div>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center">
              <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg  service dark:text-black cursor-pointer" onClick={() => handleScroll(productDevelopmentRef)}>
              End-to-End Product Development
              </div>
            </div>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center">
              <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg  service dark:text-black cursor-pointer" onClick={() => handleScroll(iotSolutionsRef)}>
              IoT Solutions
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <div>
        {/* <AboutUs /> */}
      </div>
      <style jsx>{`
        .triangle {
          position: relative;
        }
        .triangle:before {
          content: "";
          position: absolute;
          top: -150px;
          right: -8.7rem;
          width: 0;
          height: 0;
          border-top: 9rem solid transparent;
          border-right: 9rem solid #d44f1fc7;
          box-shadow: inset -10px 0 10px -5px #9a3412;
          z-index: -1;
        }
        .bgImage {
          background: linear-gradient(
              left,
              rgba(7, 2, 0, 0.8),
              rgb(169, 75, 40, 0.5)
            ),
            url("/assets/aboutPage.jpg");
          background-size: cover;
          background-position: left center;
          height: 65vh;
        }
        .service {
          background: linear-gradient(to right, #e0e0e0 50%, #de4b1a 50%),
            url("/assets/serviceImg.jpg");
          background-size: 200% 100%, cover;
          background-position: left center, center;
          margin-left: 10px;
          transition: background-position 1s ease;
        }
        .service:hover {
          background-position: right center, center;
        }
      `}</style>
    </>
  );
};

export default Service;
