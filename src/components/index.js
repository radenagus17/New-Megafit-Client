import { lazy } from "react";

export const Footer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Footer")), 2000);
  });
});
export const Navbar = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Nav")), 2000);
  });
});

export { default as HomeSec1 } from "./HomeSec1";
export { default as HomeSec2 } from "./HomeSec2";
export { default as StickyTrial } from "./StickyTrial";
export { default as CoverAbout } from "./CoverAbout";
export { default as AboutSec1 } from "./AboutSec1";
export { default as CoverMember } from "./CoverMember";
export { default as MemberSec1 } from "./MemberSec1";
export { default as CoverFacilities } from "./CoverFacilities";
export { default as FacilitiesSec1 } from "./FacilitiesSec1";
export { default as CoverArticle } from "./CoverArticle";
export { default as ArticleSec1 } from "./ArticleSec1";
