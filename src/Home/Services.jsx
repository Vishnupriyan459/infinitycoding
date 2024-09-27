import React, { useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Services = () => {
  useEffect(() => {
    const lgScreen = window.matchMedia("(min-width: 1024px)"); // lg size breakpoint
    const xlScreen=window.matchMedia("(min-width: 1124px)");
    if (xlScreen.matches) {
      // GSAP animations for large screens
      gsap.to(".learn-section", {
        x: 100,
        duration: 3,
        scrollTrigger: {
          trigger: '.learn-section',
          start: 'top center',
          end: 'bottom center',
        }
      });

      gsap.to(".Buid-animation", {
        x: -220,
        duration: 3,
        scrollTrigger: {
          trigger: '.Buid-animation',
          start: 'top center',
          end: 'bottom center',
        }
      });

      gsap.to(".automation-animation", {
        x: 100,
        duration: 3,
        scrollTrigger: {
          trigger: '.automation-animation',
          start: 'top center',
          end: 'bottom center',
        }
      });

      gsap.to(".circle", {
        y: 500, // Move down to the end of the line (height - circle radius)
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".svg-container",
          start: "top center", // Start animation when top of the container hits the center of the viewport
          end: "bottom center", // End animation when bottom of the container hits the center of the viewport
          scrub: true, // Smooth scrubbing
        },
      });
    }
    else if(lgScreen.matches){
     gsap.to(".motionermd",{
      x:0,
      ease:"power2.out",
      scrollTrigger:{
        trigger: ".motionermd",
          start: "top center", // Start animation when top of the container hits the center of the viewport
          end: "bottom center", // End animation when bottom of the container hits the center of the viewport
          scrub: true,
      }
     })
    }
  }, []);

  return (
    <div className="w-full h-[80vh] md:h-[60vh] lg:h-[150vh] relative mt-10 " id="service">
      <div className="w-[220px] h-[44.4px] absolute -top-[2.75em] left-[1rem] flex items-end">
        <div className="w-[15px] h-[15px] md:w-[42px] md:h-[42px] bg-[#ffff]">
          <div className="w-full h-full bg-[#1B238D] rounded-br-md md:rounded-br-2xl"></div>
        </div>
        <div className="w-[45px] h-[16px] md:w-[125px] md:h-[44.4px] bg-[#fff] flex justify-center items-center rounded-t-md md:rounded-t-2xl">
          <ul className="list-disc list-inside">
            <li className="font-[800] text-[6px] leading-[7px] md:text-[16px] text-[#1B238D] md:leading-[18px]">
              <span className="text-[#6B6B68]">Services</span>
            </li>
          </ul>
        </div>
        <div className="w-[15px] h-[15px] md:w-[42px] md:h-[42px] bg-[#ffff]">
          <div className="w-full h-full bg-[#1B238D] rounded-bl-md md:rounded-bl-2xl"></div>
        </div>
      </div>
      <div className="w-full h-[60px] md:h-[137.46px] flex">
        <div className="w-[70%] bg-[#1B238D]">
          <div className="bg-[#ffff] w-full h-full rounded-tr-2xl"></div>
        </div>
        <div className="w-[30%] bg-[#ffff]">
          <div className="bg-[#1B238D] w-full h-full rounded-b-2xl"></div>
        </div>
      </div>
      <div className="w-[95%] lg:w-[90%] max-md:left-[6%] mt-[6rem] md:mt-[6.7rem] lg:mt-[8rem] md:left-[5%] absolute -top-9 ">
        <h1 className="w-[70%] md:w-[70%] xl:w-[65%] font-[300] text-[15px] leading-[15.7px] md:text-[30px] md:leading-[27px] lg:text-[50.4px] lg:leading-[55.44px]">
          Master coding with expert-led courses, develop real-world projects,
          and leverage automation tools to streamline development processes.
        </h1>
        <div className="svg-container absolute left-[40%] hidden xl:block">
          <svg width="200" className="h-[690px]" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="100"
              y1="0"
              x2="100"
              y2="690"
              stroke="#010100"
              opacity="0.5"
              strokeWidth="2"
            />
            <circle className="circle" cx="100" cy="100" r="10" fill="blue" />
          </svg>
        </div>

        <div className="max-xl:motionermd max-xl:-translate-x-[500] max-md:flex-col max-lg:flex items-center  gap-3 lg:py-5  space-y-7">
          <div className="learn-section h-[108px] w-full xl:w-[515px] md:mt-[4%] lg:mt-[0] md:h-[204.92px] rounded-xl md:rounded-3xl border border-gray-300 flex justify-center lg:items-center  bg-white xl:-translate-x-[500]">
            <div className="w-[90%] h-[80%] m-3 space-y-4">
              <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">
                Learn
              </h1>
              <div className="flex flex-col  gap-1">
                <div className="font-[400] text-[10px] leading-[9px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
                  Master coding with our expert-led courses that put practical
                  skills at the core of the learning process.
                </div>
                <Link to="/info" className="self-end">
                  <IoMdArrowForward className="cursor-pointer text-[10px] md:text-[30px] lg:text-[40px] opacity-70" />
                </Link>
              </div>
            </div>
          </div>

          <div className="Buid-animation xl:m-[65%] h-[108px] w-full xl:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-gray-300 flex justify-center items-center bg-white  xl:-translate-x-[300]">
            <div className="w-[90%] h-[80%] m-3 space-y-4">
              <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">
                Build
              </h1>
              <div className="flex flex-col md:gap-1">
                <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
                  Develop real-world projects that you can manage and showcase.
                </div>
                <Link to="/info" className="self-end">
                  <IoMdArrowForward className="cursor-pointer text-[10px] md:text-[30px] lg:text-[40px] opacity-70" />
                </Link>
              </div>
            </div>
          </div>

          <div className="automation-animation h-[108px] w-full xl:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-gray-300 flex justify-center items-center bg-white xl:translate-x-[500]">
            <div className="w-[90%] h-[80%] m-3 space-y-4">
              <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">
                Automate
              </h1>
              <div className="flex flex-col md:gap-1">
                <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
                  Understand and leverage automation tools to streamline your
                  development processes.
                </div>
                <Link to="/info" className="self-end">
                  <IoMdArrowForward className="cursor-pointer text-[10px] md:text-[30px] lg:text-[40px] opacity-70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-xl:motionermd max-xl:-translate-x-[500] max-md:flex-col max-lg:flex items-center justify-center gap-3 lg:py-5 space-y-7">
  <div className="learn-section h-[108px] w-full xl:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-gray-300 flex justify-center items-center bg-white">
    <div className="w-[90%] h-[80%] m-3 space-y-4">
      <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">Learn</h1>
      <div className="flex flex-col md:gap-1">
        <div className="font-[400] text-[10px] leading-[9px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
          Master coding with our expert-led courses that put practical skills at the core of the learning process.
        </div>
        <Link to="/info" className="self-end">
          <IoMdArrowForward className="cursor-pointer text-[10px] md:text-[30px] lg:text-[40px] opacity-70" />
        </Link>
      </div>
    </div>
  </div>

  <div className="Buid-animation h-[108px] w-full xl:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-gray-300 flex justify-center items-center bg-white">
    <div className="w-[90%] h-[80%] m-3 space-y-4">
      <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">Build</h1>
      <div className="flex flex-col md:gap-1">
        <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
          Develop real-world projects that you can manage and showcase.
        </div>
        <Link to="/info" className="self-end">
          <IoMdArrowForward className="cursor-pointer text-[10px] md:text-[30px] lg:text-[40px] opacity-70" />
        </Link>
      </div>
    </div>
  </div>

  <div className="automation-animation h-[108px] w-full xl:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-gray-300 flex justify-center items-center bg-white">
    <div className="w-[90%] h-[80%] m-3 space-y-4">
      <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">Automate</h1>
      <div className="flex flex-col md:gap-1">
        <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
          Understand and leverage automation tools to streamline your development processes.
        </div>
        <Link to="/info" className="self-end">
          <IoMdArrowForward className="cursor-pointer text-[10px] md:text-[30px] lg:text-[40px] opacity-70" />
        </Link>
      </div>
    </div>
  </div>
</div> */}

      </div>
    </div>
  );
};

export default Services;
