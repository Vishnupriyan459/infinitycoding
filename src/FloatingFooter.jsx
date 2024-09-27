import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingFooter = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.offsetWidth;
    const contentWidth = marquee.scrollWidth / 2; // Since we will have two copies of content

    gsap.to(marquee, {
      x: `-${contentWidth}px`,
      duration: 30, // Adjust this value to control the scroll speed
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % contentWidth)
      }
    });
  }, []);

  return (
    <div className="w-full h-[6rem] md:h-[10rem] flex items-center gap-6 z-30 overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex items-center font-[600] text-[20px] md:text-[70px] text-[#ffff] whitespace-nowrap"
      >
        {/* Clone content for seamless scroll */}
        <div className="flex items-center">
          <div className="flex items-stretch  h-6 md:h-[2.8rem] scroll-item">
            <button className="bg-[#fff] rounded-xl px-2 py-1">
              <img
                src="plus.svg"
                alt="Plus Icon"
                className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
              />
            </button>
            <button className="bg-[#fff] rounded-xl text-[6px] md:text-[18px] text-[#1B238D] px-5 text-center">
              Get in touch
            </button>
          </div>
          <img
            src="pluswhite.svg"
            alt="Plus Icon"
            className="w-[25px] h-[25px] md:w-[45px] md:h-[45px] scroll-item"
          />
          <div className="scroll-item mx-4">Ready to move faster?</div>
          <div className="scroll-item mx-4">Get in touch now!</div>
          <div className="scroll-item mx-4">Explore our services</div>
        </div>
        
        {/* Clone of the content */}
        <div className="flex items-center ml-[3rem]">
          <div className="flex items-stretch font-[400] h-6 md:h-[2.8rem] scroll-item">
            <button className="bg-[#fff] rounded-xl px-2 py-1 w-[40px] h-6 md:h-[2.8rem]">
              <img
                src="plus.svg"
                alt="Plus Icon"
                className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
              />
            </button>
            <button className="bg-[#fff] rounded-xl text-[6px] md:text-[18px] text-[#1B238D] px-5 text-center">
              Get in touch
            </button>
          </div>
          <img
            src="pluswhite.svg"
            alt="Plus Icon"
            className="w-[25px] h-[25px] md:w-[45px] md:h-[45px] scroll-item"
          />
          <div className="scroll-item mx-4">Ready to move faster?</div>
          <div className="scroll-item mx-4">Get in touch now!</div>
          <div className="scroll-item mx-4">Explore our services</div>
        </div>
      </div>
    </div>
  );
};

export default FloatingFooter;
