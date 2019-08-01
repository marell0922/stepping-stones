import React from "react";
import InputText from "./InputText";
import RectButton from "./RectButton";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  height: 100vh;
`;

class intro extends React.Component {
  state = {
    length: "",
    weight: "",
    weights: ""
  };

  handleChangeValue = e => {
    console.log("handleChageValue", e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  isNumberRegExp = inputValue => {
    return new RegExp(/^[0-9]*$/).test(inputValue);
  };

  isNumberArrayRegExp = inputValue => {
    //////////// 정규식 찾아서 할것!  i\w+?n
    return new RegExp(/^[0-9,]*$/).test(inputValue);
  };

  checkInputValue = (length, weight, weights) => {
    if (!this.isNumberRegExp(length)) {
      alert("Enter only Number");
      this.setState({ length: "" });
      return false;
    }
    if (!this.isNumberRegExp(weight)) {
      alert("Enter only Number");
      this.setState({ weight: "" });
      return false;
    }

    if (!this.isNumberArrayRegExp(weights)) {
      alert("Enter Number and coma(,)! ex)1,2,3");
      this.setState({ weights: "" });
      return false;
    }

    //weights > weight 작동 x
    let work_rule = weights.split(",").find(data => {
      console.log(data);
      return Number(data) > Number(weight);
    });

    if (work_rule) {
      alert("weights의 수는 weight의 수보다 클 수 없습니다!");
      this.setState({ weights: "" });
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    const { length, weight, weights } = this.state;

    if (this.checkInputValue(length, weight, weights)) {
      // redux 전송!
      this.props.onSubmit({ length, weight, weights });
    }
  };

  render() {
    const { length, weight, weights } = this.state;
    return (
      <Root>
        <div>
          <InputText
            title="length"
            data={length}
            onChange={this.handleChangeValue}
          />
          <InputText
            title="weight"
            data={weight}
            onChange={this.handleChangeValue}
          />
          <InputText
            title="weights"
            data={weights}
            onChange={this.handleChangeValue}
          />
        </div>
        <RectButton title="start" onClick={this.handleSubmit} />
      </Root>
    );
  }
}

export default intro;
