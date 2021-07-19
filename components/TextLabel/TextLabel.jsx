import React from "react";

import CopyRightLabel from "./components/CopyRightLabel";

class TextLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
    this.togglePop = this.togglePop.bind(this);
  }
  togglePop() {
    this.setState({
      seen: !this.state.seen,
    });
  }

  renderText(type) {
    switch (type) {
      case "COPYRIGHT":
        return (
          <CopyRightLabel>
            Copyright © Polar 2021 All right reserved
          </CopyRightLabel>
        );
    }
  }

  render() {
    return <div>{this.renderText(this.props.type)}</div>;
  }
}

export default TextLabel;
