import React from "react";
import DisplayImg from "./DisplayImg";

const displayImgList = ({ count }) => {
  console.log(count);
  console.log(new Array(count).fill(<DisplayImg />));
  return new Array(count).fill(<DisplayImg />);
};

export default React.memo(displayImgList);
