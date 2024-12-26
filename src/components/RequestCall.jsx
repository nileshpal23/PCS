"use client";
import { useRef, useState } from "react";
import { Slide,Fade } from "react-awesome-reveal";
import { Input } from "./ui/input";


const RequestCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();

    const a = form.current;
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Fade direction="bottom" duration={1000} fraction={0}>
        <div className="font-serif h-[90vh] bgImage" style={{ marginTop: "" }}>
          <div
            ref={form}
            className="z-20 sm:pt-40 pt-10 relative flex justify-center font-serif"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1  p-4 relative z-10">
              <div className="h-full">
                <Slide direction="up" duration={900} fraction={0}>
                  <h1 className="text-lg md:text-7xl text-center font-bold mb-8 text-white">
                    Contact Us
                  </h1>
                </Slide>
                <Slide direction="up" duration={1000} fraction={0}>
                  <p className="text-white max-w-lg mx-auto my-2 text-sm text-center">
                    We are here to help with any questions about our projects,
                    programs, or events. Reach out and let us know how we can
                    assist you in your software journey.
                  </p>
                </Slide>
              </div>
              <div>
                <form className="space-y-4 mx-10" onSubmit={handleForm}>
                  <Input
                    type="text"
                    value={formData.name}
                    name="name"
                    placeholder="Your full name"
                    className="rounded-lg border focus:ring-2 focus:ring-teal-500 w-full p-4 placeholder:text-white"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    name="email"
                    placeholder="Your email address"
                    className="rounded-lg border focus:ring-2 focus:ring-teal-500 w-full p-4 placeholder:text-white"
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    value={formData.message}
                    placeholder="Your message"
                    name="message"
                    className="rounded-lg border focus:ring-2 focus:ring-teal-500 w-full p-4 bg-transparent placeholder:text-white"
                    rows={5}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
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
      </Fade>
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
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default RequestCall;
