import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowForward } from "react-icons/io";
import Coursechild from "./Coursechild";

gsap.registerPlugin(ScrollTrigger);

const Course = () => {
  const [data] = useState([
    {
      mode: "online",
      detail: "A comprehensive bootcamp designed to take beginners to advanced Java developers.",
      title: "Java Bootcamp",
      bg: "bg-java",
      tools: ["Eclipse", "Spring boot", "Jenkins"],
      duration: 8,
    },
    {
      mode: "online",
      detail: "An immersive program covering front-end and back-end development.",
      title: "Full-Stack Development Program",
      bg: "bg-FullStack",
      tools: ["Vscode", "PostMan", "GitHub"],
      duration: 12,
    },
    {
      mode: "online",
      detail: "A practical course focused on automating testing using Python.",
      title: "Automation with Python",
      bg: "bg-Automation",
      tools: ["vscode", "GitHub", "Selenium"],
      duration: 5,
    },
    {
      mode: "online",
      detail: "A practical course focused on AI and GenAI using Python with AI.",
      title: "AI with Python",
      bg: "bg-ai",
      tools: ["GitHub Copilot", "GitHub", "ChatGPT"],
      duration: 10,
    },
  ]);

  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const mdScreen = window.matchMedia("(max-width: 768px)");
    const sections = panelsRef.current;
    
    const scrollConfig = {
      trigger: containerRef.current,
      pin: true,
      scrub: 0.5,
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: 0.8,
        ease: "power4.inOut",
      },
      start: "top top",
      end: () => "+=" + containerRef.current.offsetWidth * sections.length - 30,
      invalidateOnRefresh: true,
    };
  
    const horizontalScroll = gsap.to(sections, {
      xPercent: mdScreen.matches ? -28 * 4 : -28 * (sections.length - 1),
      ease: "power4.inOut",
      scrollTrigger: scrollConfig,
    });
  
    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);
  
  

  return (
    <>
      <div
        className="w-full h-full md:h-[800px] lg:h-[883.7px] mt-[3rem] md:mt-[8rem] lg:mt-[10rem] relative bg-[#1B238D] rounded-2xl"
        ref={containerRef}
      >
        <div
          id="course"
          className="w-[209px] h-[44.4px] absolute -top-[2.76rem] left-[1rem] flex content-end items-end"
        >
          <div className="w-[22px] h-[22px] md:w-[42px] md:h-[42px] bg-[#1B238D]">
            <div className="w-[100%] h-[100%] bg-[#fff] rounded-br-lg md:rounded-br-2xl"></div>
          </div>
          <div className="w-[65px] h-[24px] md:w-[125px] md:h-[44.4px] bg-[#1B238D] flex justify-center items-center rounded-t-lg md:rounded-t-2xl">
            <ul className="list-disc list-inside">
              <li className="font-[800] text-[9px] leading-[9.5px] md:text-[16px] text-[#fff] md:leading-[18px]">
                <span>Course</span>
              </li>
            </ul>
          </div>
          <div className="w-[22px] h-[22px] md:w-[42px] md:h-[32px] bg-[#1B238D]">
            <div className="w-[100%] h-[100%] bg-[#fff] rounded-bl-lg md:rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="md:px-2 lg:px-9 lg:py-[10vh]">
          <div
            className="w-full flex gap-5 overflow-x-hidden scroll-smooth snap-x snap-mandatory py-4 mx-auto"
          >
            {data.map((course, index) => (
              <Coursechild
                key={index}
                course={course}
                ref={(el) => (panelsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Course;
