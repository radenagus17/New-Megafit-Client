import React, { memo } from "react";
import { CoverAbout, AboutSec1 } from "../components";

const About = () => {
  return (
    <>
      <CoverAbout />
      <AboutSec1 />
    </>
  );
};

export default memo(About);
