import React from "react";
import Intro from "../Components/Intro";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as settingActions from "../Store/modules/setting";

class IntroContainer extends React.Component {
  // button vs onChange

  handleSubmit = inputValue => {
    const { SettingActions } = this.props;
    SettingActions.setValue(inputValue);
    this.props.history.push("/view");
  };

  render() {
    return <Intro onSubmit={this.handleSubmit} />;
  }
}
export default connect(
  null,
  dispatch => ({
    SettingActions: bindActionCreators(settingActions, dispatch)
  })
)(IntroContainer);
