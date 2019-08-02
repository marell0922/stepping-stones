import React from "react";
import styled from "styled-components";

const Root = styled.label`
  font-size: 27pt;
  color: olive;
`;

const displayText = ({ title, value }) => (
  <Root>
    {title} {value ? " : " + value : ""}
  </Root>
);

export default displayText;
