import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ChatObj from './ChatObj';
import Feedback from './Feedback';

const details1 = {
  body: "Infinite Coding perfectly translated our learning needs into a practical, engaging experience. The hands-on approach and expert guidance helped me gain confidence in Java programming.",
  name: "Nadir",
  title: "Founder of Ava",
  img: 'bg-nadirprofile'
};
const details2 ={
  body: "The team quickly understood our requirements and provided excellent ongoing support.",
  name: "Arnaud Barbezat",
  title: "International Marketing Manager Caya",
  img: "bg-arnaudprofile",
}
const details3={
  body: "The convenience and quality of Infinite Coding's programs are unmatched. The instructors are knowledgeable and approachable, and the curriculum is thorough and up-to-date. This experience has significantly advanced my coding skills.",
    name: "Ron Simpson",
    title: "Founder The Avocado Show & Skybox",
    img: "bg-ronprofile",

}


const ChatTrigger = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const containerHeight = scrollContainer.offsetHeight;
    const contentHeight = scrollContainer.scrollHeight / 2; // Since we will have two copies of content

    gsap.to(scrollContainer, {
      y: `-${contentHeight}px`,
      duration: 15, // Adjust this value to control the scroll speed
      ease: 'linear',
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize(y => parseFloat(y) % contentHeight)
      }
    });
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div
        ref={scrollRef}
        className="flex flex-col gap-9 items-center"
      >
        <ChatObj />
        <Feedback details={details1} />
        <ChatObj />
        {/* Demo */}
        <Feedback details={details2} />
        <ChatObj />
        <Feedback details={details3} />

      </div>
    </div>
  );
};

export default ChatTrigger;
