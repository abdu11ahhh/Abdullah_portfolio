import React from 'react';
import htmlLogo from '../assets/images/html5-logo-31813.png';
import cssLogo from '../assets/images/pngegg.png';
import reactLogo from '../assets/images/react.png';
import framerLogo from '../assets/images/framer.png';
import tailwindLogo from '../assets/images/tailwind-css-icon.png';

const images = [
  { img: htmlLogo, alt: 'HTML' },
  { img: cssLogo, alt: 'CSS' },
  { img: reactLogo, alt: 'REACT' },
  { img: framerLogo, alt: 'FRAMER' },
  { img: tailwindLogo, alt: 'TAILWIND' },
];

function Expertise() {
  return (
    <div className="mt-[100px] h-[100vh]">
      <div>
        <h1 className="font-[ClashDisplay-Bold] text-[28px]">Expertise</h1>
      </div>
      <div className="mt-[120px] ">
        <div className="logos flex lg:gap-24 gap-10 justify-center flex-wrap">
          {images.map((img) => {
            return (
              <div className="img flex flex-col lg:px-[70px] lg:py-[50px] px-14 py-10 md:gap-8 gap-6">
                <img src={img.img} alt="as" />
                <p>{img.alt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
