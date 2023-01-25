import React from "react";
import Mail from "./Mail";
import Social from "./Social";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-5xl text-[#003342] font-mono font-semibold tracking-wide m-5 md:m-10">
        {" "}
        Contact
      </div>
      <div>
        <Mail />
        <Social />
      </div>
    </div>
  );
};

export default Contact;
