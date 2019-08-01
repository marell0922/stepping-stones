import React from "react";
import styled from "styled-components";
import { tsPropertySignature } from "@babel/types";

const Root = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: gray;
  border: 0;
  border-radius: 10%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const displayRect = props => <Root>{props.children}</Root>;

export default displayRect;
