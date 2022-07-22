import React, { memo } from "react";
import { HomeSec1, HomeSec2, StickyTrial } from "../components";

const Home = () => {
  return (
    <>
      <HomeSec1 />
      <HomeSec2 />
      <StickyTrial />
    </>
  );
};

export default memo(Home);
