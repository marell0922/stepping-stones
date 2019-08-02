import React from "react";
import DisplayRect from "./DisplayRect";
import DisplayImg from "./DisplayImg";

const displayRectList = ({ length, data }) => {
  console.log(data);

  let array = new Array(length).fill(<DisplayRect />);

  if (data) {
    data.map((data, index) => {
      array[data.position] = (
        <DisplayRect>
          <DisplayImg />
        </DisplayRect>
      );
    });
  }

  console.log("array", array);
  return array;
};

export default React.memo(displayRectList);
