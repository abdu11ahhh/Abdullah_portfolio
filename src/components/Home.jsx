import React from 'react';
import myImg from '../assets/images/Abdullah.jpg';
function Home() {
  return (
    <div className="lg:mt-[100px] mt-[45px] sm:p-[10px]">
      <div className="lg:flex md:flex justify-between mb-10 lg:min-h-[870px] md:h-[100%]">
        <div className="lg:min-w-[70%] w-[100%] md:w-[50%] flex flex-col justify-center lg:gap-32 md:gap-14 gap-6">
          <h1 className="lg:text-[120px] relative z-10 md:text-[70px] text-[65px] tracking-wider leading-tight font-[ClashDisplay-Bold] ">
            <span className="cursor-pointer"> FRONT </span>
            <span className="border-[5px] w-[60px] hover:w-[96px] duration-700 border-[#ffff1c] lg:mb-[30px] sm:mb-3 h-[15px] lg:inline-block hidden rounded-md "></span>{' '}
            END DEVELOPER
          </h1>
          <div>
            <button className="lg:w-[300px] md:w-[300px] w-[100%]  hover:border-[#c0c0ab] duration-300 p-4 rounded-full  text-[24px] border border-[#c0c0ab]/50 ">
              Say HI
            </button>
          </div>
        </div>
        <div className="flex lg:w-[400px] md:w-[300px] w-[100%] img-div text-[#c0c0ab]/50 hover:text-[#c0c0ab] duration-700 mt-10 text-before text-after italic  flex-col lg:justify-center md:justify-start">
          <img
            className="w-[100%] h-[300px] object-contain"
            src={myImg}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
