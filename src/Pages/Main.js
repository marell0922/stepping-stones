import React from "react";
import Main from "../Components/Main";
import { connect } from "react-redux";

class MainContainer extends React.Component {
  componentWillMount() {
    const { length, weight, weights } = this.props;
    this.weightArray = weights
      .split(",")
      .filter(x => !!x)
      .map((data, index) => {
        console.log("weights - data ", !!data);
        return Number(data);
      });

    console.log("weight", typeof this.weightArray);

    if (!length || !weight || this.weightArray.length === 0) {
      this.props.history.push("/");
    }
  }

  render() {
    const { length, weight, weights } = this.props;

    const info = this.weightArray.map(data => {
      return { position: -1, weight: data };
    });

    console.log("info", info);

    return (
      <Main length={length} weight={weight} weights={weights} info={info} />
    );
  }
}

export default connect(
  state => ({
    length: state.length,
    weight: state.weight,
    weights: state.weights
  }),
  null
)(MainContainer);
