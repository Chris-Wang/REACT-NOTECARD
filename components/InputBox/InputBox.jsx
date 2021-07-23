import React from "react";

import SearchInput from "./components/SearchInput";
import SubmitButton from "./components/SubmitButton";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seenButton: false,
      inputValue: "",
    };

    this.handleGetInputValue = this.handleGetInputValue.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleGetInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
      seenButton: true,
    });
  };

  handlePost = () => {
    const { inputValue } = this.state;
    //console.log(inputValue, "------InputValue");
    this.props.updateId(inputValue);

    this.setState({
      seenButton: false,
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handlePost();
      console.log("enter press here! ");
    }
  };

  renderInputBox(type) {
    switch (type) {
      case "SEARCH":
        // console.log("input render now");
        return (
          <SearchInput
            placeholder="Search"
            type="text"
            inputColor="black"
            value={this.state.InputValue}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleGetInputValue}
          />
        );
    }
  }

  render() {
    //  console.log(this.props.updateId);

    return (
      <>
        {this.renderInputBox(this.props.type)}
        {this.state.seenButton && (
          <SubmitButton onClick={this.handlePost}>Search</SubmitButton>
        )}
      </>
    );
  }
}

export default InputBox;
