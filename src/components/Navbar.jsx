"use client";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { ThemeToggle } from "./theme-toggle";
import { Phone } from "lucide-react";

const Navbar = () => {
  let toggle;
  const [isMenuOpen, setIsMenuOpen] = useState(toggle);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-orange-700 bg-gray-200"
      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  };

  useEffect(() => {
    // Close menu when pathname changes (i.e., navigation)
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Upper line */}
      <Slide direction="up" duration={800}>
        <div>
          <div className="relative z-10 sm:flex  hidden justify-between">
            <div
              className="triangle1 w-52 "
              style={{
                borderRight: "3.5rem solid transparent",
                borderBottom: "3.5rem solid #9A3412",
              }}
            ></div>

            <div
              className="triangle w-52 "
              style={{
                borderLeft: "3.5rem solid transparent",
                borderBottom: "3.5rem solid #9A3412",
              }}
            ></div>
          </div>

          <div
            className="font-serif h-[3.5rem] flex justify-center  "
            style={{ marginTop: "-3.5rem", backgroundColor: "#292929" }}
          >
            <div className=" z-20 w-[35vw] md:flex hidden text-white font-serif  text-center justify-between m-auto">
              <p
                className=" cursor-pointer"
                onClick={(e) => {
                  window.location.href = "mailto:contact@pcssolution.co";
                }}
              >
                <Mail className=" inline " />
                &nbsp;&nbsp; contact@pcssolution.co
              </p>
              <p className=" cursor-pointer">
                <MapPin className="inline" />
                &nbsp;&nbsp; Ahmedabad Gujrat, India
              </p>
            </div>
          </div>

          <style jsx>{`
            .triangle1 {
              position: relative;
            }
            .triangle1:before {
              content: "";
              position: absolute;
              top: -3px;
              right: -3.7rem;
              width: 0;
              height: 0;
              border-top: 3.5rem solid transparent;
              border-left: 3.5rem solid #ffeae352;
              box-shadow: inset -10px 0 10px -5px #9a3412;
              z-index: -1;
            }
            .triangle {
              position: relative;
            }
            .triangle:before {
              content: "";
              position: absolute;
              top: -3px;
              left: -3.7rem;
              width: 0;
              height: 0;
              border-top: 3.5rem solid transparent;

              border-right: 3.5rem solid #ffeae352;

              box-shadow: inset -10px 0 10px -5px #9a3412;
              z-index: -1;
            }
          `}</style>
        </div>
      </Slide>

      <Slide direction="up" duration={1000}>
        <nav className="bg-white dark:bg-gray-900 text-xl w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-serif font-bold">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/assets/Pcs.png"
                className="mr-2 h-12"
                width={70}
                height={70}
                alt="Logo"
                unoptimized={true}
              />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse sm:mt-0 mt-4">
              <Link
                className="flex"
                href="https://api.whatsapp.com/send?phone=9510573174"
                target="blank"
              >
                <div className=" bg-orange-100 dark:bg-gray-800 dark:text-white p-2 rounded-xl hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600">
                  <Phone />
                </div>
                &nbsp; +91 9510573174 &nbsp;&nbsp;
              </Link>

              <ThemeToggle />
              <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center ${
                isMenuOpen ? "flex" : "hidden"
              } w-full md:flex md:w-auto md:order-1 justify-center`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col w-full p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0  ${getLinkClass(
                      "/"
                    )}`}
                    aria-current={pathname === "/" ? "page" : undefined}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutPage"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass(
                      "/aboutPage"
                    )}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicesPage"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass(
                      "/servicesPage"
                    )}`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactPage"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass(
                      "/contactPage"
                    )}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Slide>
    </>
  );
};

export default Navbar;
