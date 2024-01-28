import React from 'react';

function About() {
  return (
    <div className="mt-[100px]">
      <div>
        <h1 className="font-[ClashDisplay-Bold] text-[28px]">ABOUT ME</h1>
      </div>
      <div className="mt-12 lg:text-[36px] tracking-wide text-justify leading-normal md:text-[24px] text-[20px] lg:tracking-wider">
        <p className="">
          Hi, I'm Muhammad Abdullah, a Full Stack Developer specialized in
          Front-End Development. I'm a Computer Science graduate from NUST. I
          have a passion for developing user-friendly and eye-catching websites
          that promotes creativity.
        </p>
        <p className="mt-10 lg:mt-24">
          My journey into the coding began with a curiosity that evolved into a
          profound expertise in ReactJS. From sleek user interfaces to
          interactive components, I thrive on the challenge of making every
          click, scroll, and interaction a delightful experience.{''}
          <p className="mt-10 lg:mt-24">
            <span className="font-[ClashDisplay-Bold] text-[#c3ff41]">
              Let's collaborate
            </span>{' '}
            to turn your digital vision into a reality—because in the world of
            code, the possibilities are limitless.
          </p>
        </p>
        <p className="mt-16 lg:mt-24"></p>
      </div>
    </div>
  );
}

export default About;
