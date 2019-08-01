import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1%;
`;

const DisplayTitle = styled.label`
  margin-right: 1rem;
  font-size: 20pt;
`;

const DisplayContent = styled.input`
  font-size: 20pt;
  text-align: right;
`;

const InputText = props => {
  return (
    <Root>
      <DisplayTitle>{props.title} </DisplayTitle>
      <DisplayContent
        type="text"
        name={props.title}
        value={props.data}
        onChange={props.onChange}
      />
    </Root>
  );
};

export default InputText;
