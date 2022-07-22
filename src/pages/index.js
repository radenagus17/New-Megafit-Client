import { lazy } from "react";

export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Home")), 2000);
  });
});
export const About = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./About")), 2000);
  });
});
export const Membership = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Membership")), 2000);
  });
});
export const Facilities = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Facilities")), 2000);
  });
});
export const Article = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Article")), 2000);
  });
});

export { default as Loader } from "./Loader";
