import React from "react";

import SearchInput from "./components/SearchInput";

class InputBox extends React.Component {
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

  renderInputBox(type) {
    switch (type) {
      case "SEARCH":
        return (
          <SearchInput defaultValue="Search" type="text" inputColor="black" />
        );
    }
  }

  render() {
    return <div>{this.renderInputBox(this.props.type)}</div>;
  }
}

export default InputBox;
