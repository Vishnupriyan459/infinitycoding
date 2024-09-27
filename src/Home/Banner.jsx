import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Banner.css';

const Banner = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const headingWords = headingRef.current.querySelectorAll('.word');
    const paragraphWords = paragraphRef.current.querySelectorAll('.word');

    gsap.fromTo(
      headingWords,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      paragraphWords,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", delay: 1.5 }
    );
  }, []);

 

  const items = [
    "company/coinbase.svg",
    "company/dropbox.svg",
    "company/slack.svg",
    "company/spotify.svg",
    "company/webflow.svg",
    "company/zoom.svg",
  ];

  return (
    <div className="w-[88%] mx-auto">
      <div className="text-[#fff] mx-3 md:mx-3 mt-[2rem] md:mt-[4.5rem]">
        <div className="font-extrabold md:mx-2 text-[10.50px] leading-[15.80px] md:text-[16px] md:leading-[18px]">
          Coding Your Future
        </div>
        <div
          ref={headingRef}
          className="font-[300] text-[20px] leading-[26px] md:text-[36px] md:leading-[50px] lg:text-[66px] lg:leading-[85px] xl:leading-[126px] xl:text-[86px]"
        >
          {`We empower your future through expert-led technical education.`.split(' ').map((word, index) => (
            <span key={index} className="word inline-block">{word}&nbsp;</span>
          ))}
        </div>
        <div className="flex justify-between items-center w-[90%]">
          <p
            ref={paragraphRef}
            className="w-[40%] font-[400] text-[5px] leading-[8px] md:text-[9px] md:leading-[16px] lg:text-[16px] lg:leading-[23px]"
          >
            {`Infinite Coding is a premier technical teaching agency. We propel our students forward by delivering the highest quality coding education, specializing in Java and other programming languages.`.split(' ').map((word, index) => (
              <span key={index} className="word inline-block">{word}&nbsp;</span>
            ))}
          </p>
          <a href="#service" className="flex items-stretch animate-bounce">
            <button className="bg-[#fff] rounded-md md:rounded-2xl w-[10px] h-[10px] md:w-[40px] md:h-[40px] flex justify-center items-center">
              <img src="downarrow.svg" alt="" className="w-[6px] h-[6px] md:w-[12px] md:h-[12px]" />
            </button>
            <button className="bg-[#fff] rounded-md md:rounded-2xl text-[#1B238D] flex justify-center items-center text-center w-[29px] h-[10px] text-[4px] md:text-[12px] md:w-[100.6px] md:h-[40px] lg:w-[120px] hover:translate-x-1">
              Learn more
            </button>
          </a>
        </div>
      </div>
      <div>
        <img src="banner.svg" alt="" />
      </div>
      <div className="banner-container h-[50px] md:h-[70px] lg:h-[100px]">
        <div className="banner-content xl:gap-5 flex items-center whitespace-nowrap h-full">
          {items.concat(items).map((src, index) => (
            <img key={index} src={src} alt="" className="banner-item w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
