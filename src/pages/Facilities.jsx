import React, { memo } from "react";
import { CoverFacilities, FacilitiesSec1 } from "../components";

const Facilities = () => {
  return (
    <>
      <CoverFacilities />
      <FacilitiesSec1 />
    </>
  );
};

export default memo(Facilities);
