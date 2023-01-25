import React from "react";

const Mail = () => {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => (window.location = "mailto:zahidrsheikh01@gmail.com")}
        className="bg-[#EA4335] px-3 py-1 md:px-7 md:py-3 text-[#003342]  text-sm md:text-xl font-semibold md:font-bold tracking-wide md:tracking-wider rounded hover:bg-red-400 hover:animate-bounce"
      >
        Mail ME!
      </button>
    </div>
  );
};

export default Mail;
