import React from "react";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 place-content-center  text-[#003140] mt-2 md:mt-[30px]">
        <div className="text-center text-2xl md:text-4xl pt-[30px] font-semibold md:font-bold">
          About Me!
        </div>
        <div className=" ">
          <p className="text-justify  text-sm md:text-lg font-normal md:font-semibold leading-wide tracking-4 selection:bg-yellow-200">
            I’m Zahid Sheikh, an Engineering graduate, who is currently a React
            Developer. I create websites and web based apps. <br />
            <br />
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter. <br /> <br />
            My curiosity fuels me in the pursuit of many interests, hobbies,
            areas of study and artistic endeavours. I’m fast learner, able to
            pick up new skills and good communicator who can work with teams
            with relative ease. <br />
            <br />
            I want to develop expertise in various technologies related to web
            development over the course of career. <br />
            <br />
            You can check my work below and contact me by clicking the links in
            the contact section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
