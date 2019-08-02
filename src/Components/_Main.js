import React from "react";
import DisplayText from "./DisplayText";
import DisplayImg from "./DisplayImg";
import DisplayRect from "./DisplayRect";
import styled from "styled-components";
const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: black;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

class main extends React.Component {
  //logic -> redux!
  currentWeight = 0;
  // startPoint, stones, EndPoint
  startPoint = [];
  endPoint = [];
  stone = [];
  info = this.props.info;

  state = {
    timer: 0
  };

  changeData = () => {
    this.movePoistion();
    this.setState({ timer: this.state.timer + 1 });
    if (this.endPoint.length !== this.info.length) {
      setTimeout(this.changeData, 1000);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.changeData();
    }, 1000);
  }

  //   () { // setTimeOut 조건
  //     if (this.endPoint.length !== this.positions.length) {
  //       setTimeout(() => {
  //         this.setState({
  //           timer: this.state.timer + 1
  //         });
  //       }, 1000);
  //     }
  //   }

  movePoistion = () => {
    const { length, weight } = this.props;
    let result = this.info.map((data, index) => {
      //한칸씩 전진 할 경우
      if (data.position < length) {
        // endpoint를 제외 - 여기서 부터 다시!
        if (index === 0) {
          // start first, stone 0
          //startpoint
          data.position += 1;
          if (data.position === length) {
            this.currentWeight -= data.weight;
            console.log("curren", this.currentWeight);
          }
          if (data.position === 0) {
            this.currentWeight += data.weight;
          }
        } else {
          // prev_index : stone 0 first or --------------------------------------
          const prev_position = this.info[index - 1].position;
          console.log(prev_position);
          if (prev_position !== -1 && prev_position !== 0) {
            // prev_postion 증가된 값이 first of array.
            // this.info[index-1].postion===-1 : prev_val not increment - has data infront on first of array
            console.log(data.position);
            if (data.position === -1) {
              //새로운 값이 추가 되는 경우
              const nextWeight = this.currentWeight + data.weight; // nextWeight : 새로운 값이 추가될 시 증가되는 값
              if (weight >= nextWeight) {
                data.position += 1;
                this.currentWeight = nextWeight;
              }
            } else {
              //기존의 값
              if (data.position !== length) {
                //data.position===5 : endPoint
                data.position += 1;
                if (data.position === length) {
                  this.currentWeight -= data.weight;
                  console.log("curren", this.currentWeight);
                }
              }
            }
          }
        }
      }
      return data;
    });

    console.log("result", result);
  };

  render() {
    console.log(
      "render",
      this.endPoint.length,
      this.startPoint.length,
      this.stone.length
    );
    this.endPoint = [];
    this.startPoint = [];
    this.stone.length = 0;

    const { length, weight, weights } = this.props;

    this.info.map((data, index) => {
      if (data.position === length) {
        //endPoint
        this.endPoint.push(<DisplayImg />);
      } else if (data.position === -1) {
        //startPoint
        this.startPoint.push(<DisplayImg />);
      } else {
        //stone
        this.stone[data.position] = (
          <DisplayRect>
            <DisplayImg />
          </DisplayRect>
        );
      }
      for (let i = 0; i < length; i++) {
        if (!this.stone[i]) this.stone[i] = <DisplayRect />;
      }
    });

    const { timer } = this.state;
    return (
      <Root>
        <DisplayText title="Limit Weight" value={weight + "kg"} />
        <DisplayText title="length" value={length} />
        <DisplayText title="Weight" value={weights} />
        <Body>
          <Content>[ StartPoint ]{this.startPoint}</Content>
          <Content>
            <DisplayText title="Timer" value={timer + "s"} />
            <SubContent>{this.stone}</SubContent>
            <DisplayText title="Weight" value={this.currentWeight + "kg"} />
          </Content>
          <Content>
            [EndPoint]
            {this.endPoint}
          </Content>
        </Body>
      </Root>
    );
  }
}

export default main;
