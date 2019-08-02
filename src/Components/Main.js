import React from "react";
import DisplayText from "./DisplayText";

import DisplayRectList from "./DisplayRectList";
import DisplayImgList from "./DisplayImgList";
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
  height: 80vh;
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
  startPointCount = 0;
  endPointCount = 0;
  current = [];
  info = this.props.info;

  state = {
    timer: 0
  };

  changeData = () => {
    this.movePoistion();
    this.setState({ timer: this.state.timer + 1 });
    if (this.endPointCount !== this.info.length) {
      setTimeout(this.changeData, 1000);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.changeData();
    }, 1000);
  }

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

  init = length => {
    this.endPointCount = this.info.filter(
      data => data.position === length
    ).length;
    this.startPointCount = this.info.filter(
      data => data.position === -1
    ).length;
    this.current = this.info.filter(
      data => data.position > -1 && data.position < length
    );
  };

  render() {
    const { length, weight, weights } = this.props;
    this.init(length);
    const { timer } = this.state;
    return (
      <Root>
        <DisplayText title="Limit Weight" value={weight + "kg"} />
        <DisplayText title="length" value={length} />
        <DisplayText title="Weight" value={weights} />
        <Body>
          <Content>
            <div>[ StartPoint ]</div>
            {this.startPointCount !== 0}
            <DisplayImgList count={this.startPointCount} />
            {/* return new Array(this.startPointCount).fill(<DisplayImg />);*/}
          </Content>
          <Content>
            <DisplayText title="Timer" value={timer + "s"} />
            <SubContent>
              <DisplayRectList length={length} data={this.current} />
              {/* let array = new Array(length).fill(<DisplayRect />);
                if (data) {
                    data.map((data, index) => {
                    array[data.position] = (
                      <DisplayRect>
                      <DisplayImg />
                      </DisplayRect>
                    );
                  });
                }
              */}
            </SubContent>
            <DisplayText title="Weight" value={this.currentWeight + "kg"} />
          </Content>
          <Content>
            <div>[ EndPoint ]</div>
            {this.endPointCount !== 0}
            <DisplayImgList count={this.endPointCount} />
            {/* return new Array(this.endPointCount).fill(<DisplayImg />);*/}
          </Content>
        </Body>
      </Root>
    );
  }
}

export default main;
