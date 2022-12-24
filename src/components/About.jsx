import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi. I'm Ankit Rajpoot (ARAJ), nice to meet you.</p>
          </div>
          <div>
            <p>
              I am Computer Science Engineering Student. I pursuing my B. TECH
              since july 2019 and I'm a final year student. I know C++ and
              Python programming. And I created project using these programming
              languages. I know some web development technologies like - HTML,
              CSS, JAVASCRIPT etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
