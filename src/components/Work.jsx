import React from 'react';

function Work() {
  return (
    <div className="mt-[120px]">
      <div className="flex justify-evenly tracking-widest  text-center">
        <div className="border border-l-0 border-[#c0c0ab]/50  w-[100%]  p-4">
          <h1 className="text-[24px]">Sparky Studio</h1>
          <p>ReactJS Intern</p>
          <p>JUL '22 &#x2015; AUG '23</p>
        </div>
        <div className=" border border-x-0 border-[#c0c0ab]/50 w-[100%] p-4">
          <h1 className="text-[24px]">DirectFN</h1>
          <p>MEAN Stack</p>
          <p>NOV '23 &#x2015; DEC '23</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
