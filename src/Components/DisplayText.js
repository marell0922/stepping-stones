import React from "react";
import styled from "styled-components";

const Root = styled.label`
  font-size: 25pt;
  color: olive;
`;

const displayText = ({ title, value }) => (
  <Root>
    {title} : {value}
  </Root>
);

export default displayText;
