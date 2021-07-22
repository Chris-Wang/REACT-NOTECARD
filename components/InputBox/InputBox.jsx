import React from "react";

import SearchInput from "./components/SearchInput";
import SubmitButton from "./components/SubmitButton";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      inputValue: "",
    };

    this.handleGetInputValue = this.handleGetInputValue.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleGetInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handlePost = () => {
    const { inputValue } = this.state;
    console.log(inputValue, "------InputValue");
    this.props.updateId(inputValue);
  };

  renderInputBox(type) {
    switch (type) {
      case "SEARCH":
        return (
          <SearchInput
            defaultValue="Search"
            type="text"
            inputColor="black"
            value={this.state.InputValue}
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

        <SubmitButton onClick={this.handlePost}>search</SubmitButton>
      </>
    );
  }
}

export default InputBox;
