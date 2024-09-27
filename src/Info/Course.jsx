import React, { useState, useRef } from 'react';
import Coursechild from '../Home/Coursechild';
import { FaArrowDownLong } from 'react-icons/fa6';

const Course = () => {
  const [data, setData] = useState([
    {
      mode: "online",
      detail: "A comprehensive bootcamp designed to take beginners to advanced Java developers.",
      title: "Java Bootcamp",
      bg: "bg-java",
      tools: ["Eclipse", "Spring boot", "Jenkins"],
      duration: 8
    },
    {
      mode: "online",
      detail: "An immersive program covering front-end and back-end development.",
      title: "Full-Stack Development Program",
      bg: "bg-FullStack",
      tools: ["Vscode", "PostMan", "GitHub"],
      duration: 12
    },
    {
      mode: "online",
      detail: "A practical course focused on automating testing using Python.",
      title: "Automation with Python",
      bg: "bg-Automation",
      tools: ["vscode", "GitHub", "Selenium"],
      duration: 5
    },
    {
      mode: "online",
      detail: "A practical course focused on AI and GenAI using Python with AI.",
      title: "AI with Python",
      bg: "bg-ai",
      tools: ["GitHub Copilot", "GitHub", "ChatGPT"],
      duration: 10
    }
  ]);

  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust the scroll distance as needed
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="course" className="w-full mt-[10rem] relative bg-[#F3EFEF] rounded-t-2xl rounded-bl-2xl mb-[2rem] py-2">
      <div className="w-[209px] h-[44.4px] absolute -top-[2.8rem] left-[1rem] flex content-end items-end">
        <div className="w-[42px] h-[42px] bg-[#F3EFEF]">
          <div className="w-[100%] h-[100%] bg-[#fff] rounded-br-2xl"></div>
        </div>
        <div className="w-[160px] h-[44.4px] bg-[#F3EFEF] flex justify-center items-center rounded-t-2xl">
          <ul className="list-disc list-inside">
            <li className="font-[800] text-[16px] text-[#000] leading-[18px]">
              <span>More Course</span>
            </li>
          </ul>
        </div>
        <div className="w-[42px] h-[42px] bg-[#F3EFEF]">
          <div className="w-[100%] h-[100%] bg-[#fff] rounded-bl-2xl"></div>
        </div>
      </div>
      <div className="p-9">
        <div
          ref={scrollContainerRef}
          className="w-full px-2 flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x py-4 mx-auto delay-400 scroll-container"
        >
          {data.map((course) => (
            <Coursechild key={course.title} course={course} />
          ))}
        </div>
      </div>

      <a href='#footer' className='flex justify-end items-center gap-3 mr-9'>
        <div className="flex items-center">
          <button className="w-[2rem] h-[2rem] md:w-[2rem] md:h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem] bg-[#1B238D] rounded-xl p-2 flex items-center justify-center">
            <img src="pluswhite.svg" alt="Plus Icon" />
          </button>
          <button className="bg-[#1B238D] text-white rounded-xl p-2 font-[400] text-[10px] md:text-[14px] lg:text-[19px]">
            Contact Owner name
          </button>
        </div>
        <div className='flex items-center'>
          <button
            className='w-[2rem] h-[2rem] md:w-[2rem] md:h-[2rem] lg:w-[3rem] lg:h-[3rem] rounded-lg md:rounded-xl lg:rounded-2xl bg-[#ffff] flex justify-center items-center'
            onClick={handleScrollRight}
          >
            <FaArrowDownLong className="text-[#000] -rotate-90" />
          </button>
        </div>
      </a>
    </div>
  );
}

export default Course;
