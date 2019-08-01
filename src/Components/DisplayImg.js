import React from "react";
import styled from "styled-components";
import Image from "../Image/cat.png";

const Img = styled.img`
  width: 4.1rem;
  border-radius: 10%;
  margin: 0.45rem;
`;
const DisplayImg = () => <Img src={Image} />;

export default DisplayImg;
