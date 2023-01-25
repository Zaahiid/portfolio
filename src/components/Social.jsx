import React from "react";
import Img1 from "../assets/li.png";
import Img2 from "../assets/ig.png";
import Img3 from "../assets/gh.png";

const Social = () => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        {/* 1 */}
        <div className="w-[30px] md:w-[75px]  mb-0 pb-0  ">
          <a href="https://www.linkedin.com/in/zahidrsheikh/">
            <img
              src={Img1}
              alt="LinkedIn"
              className="m-0 hover:animate-spinFast"
            />
          </a>
        </div>
        {/* 2 */}
        <div className="w-[30px] md:w-[75px]  mb-0 pb-0 ">
          <a href="https://www.instagram.com/zahidrsk/">
            <img
              src={Img2}
              alt="Instagram"
              className="m-0 hover:animate-spinFast"
            />
          </a>
        </div>
        {/* 3 */}
        <div className="w-[30px] md:w-[75px]  mb-0 pb-0  ">
          <a href="https://github.com/Zaahiid">
            <img
              src={Img3}
              alt="Github"
              className="m-0 hover:animate-spinFast"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
