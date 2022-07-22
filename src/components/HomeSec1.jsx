import React, { useState } from "react";
import Button from "./Button";
import material2 from "../assets/Material_web_2.PNG";
import material4 from "../assets/Material_web_4.PNG";

const HomeSection_1 = () => {
  const [btn] = useState("capitalize mt-32 tracking-wider text-sm md:text-base font-semibold");
  return (
    <div className="h-screen w-full bg-cover-pic bg-no-repeat bg-cover bg-center md:bg-[center_top_-40rem] relative before:absolute before:inset-0 before:bg-gray-400 before:w-full before:opacity-25 mt-0 md:mt-10">
      <div className="absolute top-0 left-[41.5%] w-7/12 opacity-80 md:left-[70%] md:w-[30%]">
        <img src={material2} alt="" />
      </div>
      <div className="absolute bottom-0 opacity-80 right-[35%] w-2/3 md:w-1/3 md:left-0">
        <img src={material4} alt="" />
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-12 text-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl italic tracking-wide text-white uppercase drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]">Arrange your free trial now</h2>
          <p className="text-white italic mx-auto py-4 max-w-md drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className="drop-shadow-md">
            <Button style={btn}>free trial now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection_1;
