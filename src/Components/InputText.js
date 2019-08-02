import React from "react";
import styled from "styled-components";

const Root = styled.input`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 0.3rem;
  font-size: 16pt;
  width: 20rem;
  text-align: right;
`;

const InputText = props => {
  return (
    <Root
      type="text"
      name={props.title}
      value={props.data}
      onChange={props.onChange}
      placeholder={props.title}
    />
  );
};

export default InputText;
