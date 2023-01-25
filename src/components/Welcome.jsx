import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-5xl text-[#003140] font-mono font-semibold tracking-wide mb-0">
        <p className="mb-0">
          <span className=" font-bold  text-4xl md:text-7xl">Hi,</span>
          I'm{" "}
          <span className="font-extrabold underline decoration-purple-900">
            Zahid Sheikh
          </span>
          ;
          <br />
          <div className="animate-pulse mb-0">Welcome to my profile.</div>
        </p>
      </div>
      <div className=" grid place-items-center min-h-fit lg:h-full md:h-full ">
        <img
          src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47qzl9qdnypsq2iiecobp1myswior6o4muqf008nf3&rid=giphy.gif&ct=g"
          alt="coder"
          className="rounded-xl w-[300px] md:w-[550px] "
        />
      </div>
    </div>
  );
};

export default Welcome;
