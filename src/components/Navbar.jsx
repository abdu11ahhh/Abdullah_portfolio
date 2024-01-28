import React, { useState } from 'react';

function Navbar() {
  const [modelView, setModelView] = useState(false);

  return (
    <div className="flex mt-6 text-[16px] md:text-[28px] lg:text-[28px] font-[ClashDisplay-Bold] justify-between items-center">
      <h1>ABDULLAH</h1>
      <button
        className="group p-4"
        onClick={() => {
          setModelView(true);
        }}>
        <div className="w-[60px] h-[8px] duration-500 group-hover:border-[#ffffe3] group-hover:w-[100px] border-t-[3px]"></div>
        <div className="w-[60px] duration-700 group-hover:border-[#ffffe3] group-hover:w-[100px] border-b-[3px]"></div>
      </button>
      <h1>Lahore</h1>
      <div
        className={`absolute z-20 ${
          modelView ? 'translate-y-[0]' : 'translate-y-[-110%]'
        } bg-[#ffffe3] transition-transform duration-[1.5s] ease-in-out top-0 left-0 h-[100vh] overflow-hidden w-[100%]`}>
        <div className="text-black m-auto mt-10 max-w-[1440px]">
          <span className="flex text-[36px] ml-5 justify-center">
            <button
              className="hover:text-[#f34040] p-4"
              onClick={() => {
                setModelView(false);
              }}>
              <div className="w-6 h-6 relative ">
                <div className="absolute w-[50px] rounded-sm h-1 bg-black transform rotate-45"></div>
                <div className="absolute w-[50px] rounded-sm h-1 bg-black transform -rotate-45"></div>
              </div>
            </button>
          </span>
        </div>
        <div className="flex justify-center items-center h-[100vh]">
          <div className="text-[#10100e] links-div text-[72px] flex flex-col text-center justify-evenly h-[100vh]">
            <a
              className="hover:translate-x-3 transition-all duration-1000"
              href="">
              Home
            </a>
            <a
              className="hover:translate-x-3 transition-all duration-1000"
              href="">
              About
            </a>
            <a
              className="hover:translate-x-3 transition-all duration-1000"
              href="">
              Expertise
            </a>
            <a
              className="hover:translate-x-3 transition-all duration-1000"
              href="">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
