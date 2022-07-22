import React, { memo } from "react";
import { CoverMember, MemberSec1 } from "../components";

const Membership = () => {
  return (
    <>
      <CoverMember />
      <MemberSec1 />
    </>
  );
};

export default memo(Membership);
