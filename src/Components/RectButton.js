import React from "react";
import styled from "styled-components";

const Root = styled.button`
  color: white;
  background-color: cadetblue;
  font-size: 20pt;
  heigt: 25px;
  margin: 1rem;
  margin-right: 6rem;
  width: 20rem;
  cursor: pointer;
`;
const RectButton = ({ title, onClick }) => (
  <Root onClick={onClick}>{title}</Root>
);

export default RectButton;
