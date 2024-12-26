"use client";
import { Fade, Slide } from "react-awesome-reveal";
// import { CardWithImage } from "../../components/Cards";
// import TeamMembers from "../../components/TeamMembers";
import AboutUs from "../../components/AboutUs";
import FounderCard from "src/components/Founder";

const About = () => {
  const cardImg = "/assets/abtUsPageImg1.jpg";
  return (
    <>
      <Slide direction="up" duration={1000} fraction={0} triggerOnce={true}>
        <div className="font-serif h-[90vh] bgImage" style={{ marginTop: "" }}>
          <div className="z-20  sm:pt-40 pt-24 relative flex justify-center font-serif">
            <div className="grid sm:grid-cols-2 grid-cols-1  relative z-10">
              <div className="h-full">
                <Slide direction="up" duration={900} fraction={0}>
                  <h1 className=" md:text-7xl sm:text-4xl text-4xl text-center font-bold mb-8 text-white">
                    About Us.
                  </h1>
                </Slide>
                <Slide direction="up" duration={1000} fraction={0}>
                  <p className="text-white max-w-lg mx-auto my-2 text-2xl text-center">
                    Home{" "}
                    <span className="text-orange-600 hover:text-white">::</span>{" "}
                    About
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
      <div className="lg:m-40 md:m-40 sm:m-32 mt-20 m-4">
        {/* <CardWithImage cardImg={cardImg} clientDiv={true} /> */}
        <FounderCard/>
      </div>
      {/* <div className="pb-10">
        <TeamMembers />
      </div> */}
      <div>
        {/* <AboutUs/> */}
      </div>
      <style jsx>{`
        .triangle {
          position: relative;
        }
        .triangle:before {
          content: "";
          position: absolute;
          top: -150px; /* Positioning the shadow to match the triangle */
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
          background-position: left center; /* Adjust the image position for smaller devices */
          height: 65vh;
        }
      `}</style>
    </>
  );
};

export default About;
