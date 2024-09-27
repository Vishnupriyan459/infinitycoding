import React, { useEffect, useRef } from 'react';
import ChatObj from "./ChatObj";
import Feedback from "./Feedback";
import gsap from 'gsap';

const details = [
  {
    body: "The convenience and quality of Infinite Coding's programs are unmatched. The instructors are knowledgeable and approachable, and the curriculum is thorough and up-to-date. This experience has significantly advanced my coding skills.",
  name: "Ron Simpson",
  title: "Founder The Avocado Show & Skybox",
  img: "bg-ronprofile",
   
  },
  {
    body: "The team quickly understood our requirements and provided excellent ongoing support.",
    name: "Arnaud Barbezat",
    title: "International Marketing Manager Caya",
    img: "bg-arnaudprofile",
  }
];

const details3 = {
  body: "Infinite Coding perfectly translated our learning needs into a practical, engaging experience. The hands-on approach and expert guidance helped me gain confidence in Java programming.",
    name: "Nadir",
    title: "Founder of Ava",
    img: 'bg-nadirprofile'
};

const ChatTrigger2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const containerHeight = scrollContainer.offsetHeight;
    const contentHeight = scrollContainer.scrollHeight / 3; 

    gsap.to(scrollContainer, {
      y: `${contentHeight}px`,
      duration: 10, // Adjust this value to control the scroll speed
      ease: 'linear',
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize(y => parseFloat(y) % contentHeight)
      }
    });
  }, []);

  return (
    <div className="relative hidden xl:h-[800px] xl:w-[750px] xl:flex flex-col items-center">
      <div
        ref={scrollRef}
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-9 items-center"
      >
        {details.map((detail, index) => (
          <Feedback key={index} details={detail} />
        ))}
        <ChatObj />
        <Feedback details={details3} />
        <ChatObj />
        {details.map((detail, index) => (
          <Feedback key={index} details={detail} />
        ))}
        <ChatObj />
        <Feedback details={details3} />
        <ChatObj />
      </div>
    </div>
  );
};

export default ChatTrigger2;
