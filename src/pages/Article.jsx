import React, { memo } from "react";
import { ArticleSec1, CoverArticle } from "../components";

const Article = () => {
  return (
    <>
      <CoverArticle />
      <ArticleSec1 />
    </>
  );
};

export default memo(Article);
