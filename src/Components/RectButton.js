import React from "react";
import styled from "styled-components";

const Root = styled.button`
  color: white;
  background-color: blue;
  font-size: 20pt;
  heigt: 25px;
  margin: 1%;
  width: 20rem;
  cursor: pointer;
`;
const RectButton = ({ title, onClick }) => (
  <Root onClick={onClick}>{title}</Root>
);

export default RectButton;
