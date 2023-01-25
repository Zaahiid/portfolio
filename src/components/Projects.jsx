import React from "react";
import Img1 from "../assets/yt-logo.png";
import Img2 from "../assets/metaverse-logo.png";
import Img3 from "../assets/todo-logo.png";
import Img4 from "../assets/weather-logo.png";
import Img5 from "../assets/movie-logo.png";
import Img6 from "../assets/bank-logo.png";
import Img7 from "../assets/calc-logo.png";

const Projects = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-5xl text-[#003140] font-mono font-semibold tracking-wide m-5 md:m-10">
        My Projects
      </div>
      {/* 1 */}
      <div className="flex  flex-col   md:flex-row">
        <div className="w-[75px] md:w-[150px]  mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zahid-yt-clone.netlify.app/">
            <img src={Img1} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className="pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3 ">
            Youtube Clone
          </div>
          <div className="  text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              This is a clone of Youtube built using React and TailwindCSS. It
              fetches the data from Youtube API provided by RapidAPI. It allows
              you to search and watch videos on different devices as it is
              responsive. It also suggest similar videos.
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex  flex-col md:flex-row">
        <div className="w-[75px] md:w-[150px]  mt-0 md:mt-2 mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zahid-metaverse-ui.netlify.app/">
            <img src={Img2} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className=" pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3">
            Metaverse UI
          </div>
          <div className=" text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              An UI of Metaverse website created with ReactJs ,TailwindCSS and
              Framer Motion. This website has modern UI components with
              interactive animations. The look of website is suitable for latest
              web3 websites and apps.
            </p>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex  flex-col md:flex-row">
        <div className="w-[75px] md:w-[150px]  mt-0 md:mt-2 mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zahid-to-do-app.netlify.app/">
            <img src={Img3} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className="pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3">
            To Do App
          </div>
          <div className=" text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              It is an app with CRUD functionalities i.e. Create, Read, Update
              and Delete. It lets user create a Task, marking a task as done,
              update if any change is needed and delete if required.A useful app
              for daily productivity.
            </p>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="flex  flex-col md:flex-row">
        <div className="w-[75px] md:w-[150px]  mt-0 md:mt-2 mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zahid-weather.netlify.app/">
            <img src={Img4} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className="pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3">
            Weather App
          </div>
          <div className=" text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              This is an app made with React which shows day’s weather of the
              searched city and forecasted weather information of next seven
              days. It fetches the weather information from OpenWeather API. It
              also auto suggesst city names.
            </p>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="flex  flex-col md:flex-row">
        <div className="w-[75px] md:w-[150px]  mt-0 md:mt-2 mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zahid-movieland.netlify.app/">
            <img src={Img5} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className="pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3">
            MovieLand
          </div>
          <div className=" text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              A movie searching app created with React, which shows details of
              the movies such as movie poster, release year. It fetch the data
              from the Movie database API. A simple app with great UI for cinema
              lovers.
            </p>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className="flex  flex-col md:flex-row">
        <div className="w-[75px] md:w-[150px]  mt-0 md:mt-2 mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zahid-hoobank.netlify.app/">
            <img src={Img6} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className="pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3">
            Hoo Bank UI
          </div>
          <div className=" text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              This is a Banking website with modern looking UI built with
              ReactJs and TailwindCSS, which is fully responsive to various
              devices of different sizes.This site is an example how modern
              banking sites should be.
            </p>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="flex  flex-col md:flex-row">
        <div className="w-[75px] md:w-[150px]  mt-0 md:mt-2 mb-0 pb-0 scale-100 hover:scale-125 ease-in duration-500 ">
          <a href="https://zaahiid.github.io/easycalc.github.io/">
            <img src={Img7} alt="yt-logo" className="m-0 p-0" />
          </a>
        </div>
        <div className="pt-0 md:pt-2">
          <div className="text-[#003140]  text-base md:text-xl font-semibold mb-0 pb-0 mt-0 md:mt-1 md:pt-3">
            Calculator
          </div>
          <div className=" text-justify text-[#003140]  text-xs md:text-lg mt-0 pt-0">
            <p>
              It is Vanilla Javascript project created for simple calculations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
