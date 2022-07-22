import Button from "./Button";
import React, { useState, lazy } from "react";
const ImageSlider = lazy(() => import("./ImageSlider"));

const HomeSection_2 = () => {
  const [btn1] = useState("tracking-wide px-12 font-semibold");
  const [btn2] = useState("tracking-wide px-8 font-semibold");
  const [btn3] = useState("tracking-wide font-semibold");
  return (
    <div className="w-full h-screen mt-0 md:mt-28">
      <div className="w-full mx-auto flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="pb-10 mx-auto">
            <Button style={btn1} link="facilities">
              Facilities
            </Button>
          </div>
          <div className="py-5 mx-auto">
            <Button style={btn2} link="membership">
              Membership
            </Button>
          </div>
          <div>
            <ImageSlider />
          </div>
        </div>
        <div className="w-full relative mt-2">
          <img className="w-screen object-top h-52 md:h-80 object-cover" src="https://previews.123rf.com/images/hkeita/hkeita1403/hkeita140300001/26785764-city-map-with-pin-pointers-3d-rendering-image.jpg" alt="google" />
          <div className="absolute w-full top-1/2 -translate-y-1/2 items-center flex justify-center drop-shadow-md">
            <Button style={btn3}>Kunjungi Kami</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection_2;
