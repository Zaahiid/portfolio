import React from "react";
import Img1 from "../assets/html5.png";
import Img2 from "../assets/css3.png";
import Img3 from "../assets/javascript.png";
import Img4 from "../assets/react.png";
import Img5 from "../assets/bootstrap.png";
import Img6 from "../assets/tailwindcss.png";
import Img7 from "../assets/framer-motion.png";
import Img8 from "../assets/github.png";

const Skills = () => {
  return (
    <div className="">
      <div className="text-center text-2xl md:text-5xl text-[#003140] font-mono font-semibold tracking-wide m-5 md:m-10">
        "Skills"
      </div>
      <div>
        <div className="flex flex-col md:flex-row">
          {/* 1 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0 ">
              <img
                src={Img1}
                alt="HTML Logo"
                className="w-[75px] md:w-[150px]  mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                HTML
              </h4>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img2}
                alt="CSS Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                CSS
              </h4>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img3}
                alt="JS Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                JavaScript
              </h4>
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img4}
                alt="React Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl">
                ReactJs
              </h4>
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img5}
                alt="BS Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                Bootstrap
              </h4>
            </div>
          </div>
          {/* 6 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img6}
                alt="TWC Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                Tailwind CSS
              </h4>
            </div>
          </div>
          {/* 7 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img7}
                alt="FM Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                Framer Motion
              </h4>
            </div>
          </div>
          {/* 8 */}
          <div className="flex flex-row md:flex-col items-center">
            <div className="mb-0 pb-0">
              <img
                src={Img8}
                alt="GH Logo"
                className="w-[75px] md:w-[150px] mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500"
              />
            </div>
            <div className="mt-0 pt-0">
              <h4 className="text-[#003140]  font-mono font-semibold tracking-tight text-sm md:text-2xl ">
                Github
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
