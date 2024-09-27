import React from 'react';
import { useLocation } from 'react-router-dom';
// import blueLogo from '../public/blueLogo.svg'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  

  return (
    <div className='flex justify-between items-center '>
      <div>
        {currentPath === '/info/' ? (
        <a href="/"><img src="blueLogo.png" alt="Logo" className='w-[104px] h-[22.5px] md:w-[180px] md:h-[45px] '/></a>
        ) : (
          <a href="/"><img src="icon.svg" alt="Icon" className='w-[104px] h-[22.5px] md:w-[204px] md:h-[45px]'/></a>
        )}
      </div>
      <a
  href="#footer"
  className="text-[#1B238D] bg-[#ffff] w-[40px] md:w-[100px] lg:w-[165px] text-center py-1 rounded-xl transition ease-in-out delay-150 duration-300 transform hover:-translate-y-1 hover:scale-100 "
>
  <ul className="list-disc list-inside">
    <li className="font-[800] text-[4px] md:text-[8px] lg:text-[16px] font-[Telegraf]">
      Contact Us
    </li>
  </ul>
</a>

    </div>
  );
};

export default Navbar;
