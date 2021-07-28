import React from "react";

import SearchInput from "./components/SearchInput";
import CommentInput from "./components/CommentInput";
import SubmitButton from "./components/SubmitButton";
import SubmitComment from "./components/SubmitComment";
import getCommentMini from "../../apis/getCommentMini";

import postNoteComment from "../../apis/postNoteComment";
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seenButton: false,
      inputValue: "",
      commentData: null,
    };

    this.handleGetInputValue = this.handleGetInputValue.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleCommentChange(newData) {
    // const newImages = this.imageLoad(newNote.imageUrl);
    this.setState({
      commentData: newData,
    });

    // this.imageLoad(this.state.noteImages);
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

  handlePostComment = () => {
    const { inputValue } = this.state;
    // console.log(inputValue, "------InputValue in Comments");
    const postBody = {
      noteId: this.props.noteId,
      authorId: this.props.userId,
      content: inputValue,
    };
    // console.log(postBody, "is postBody in comments");
    // postNoteComment(postBody).then(
    //   getCommentMini(this.props.noteId).then(this.props.handleCommentsChange)
    // );

    this.sendUpdate(postBody);
    // console.log("post in handlePostComment<InputBox>");

    this.setState({
      seenButton: false,
    });
  };

  async sendUpdate(postBody) {
    await postNoteComment(postBody);
    getCommentMini(this.props.noteId).then(this.props.handleCommentsChange);
    console.log("in sendUpdate <InputBox>");
  }

  handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handlePost();
    }
    // console.log("enter press here! in search ");
  };

  handleCommentKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handlePostComment();
    }
    // console.log("enter press here! in comment");
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
            onKeyPress={this.handleSearchKeyPress}
            onChange={this.handleGetInputValue}
          />
        );

      case "COMMENT":
        // console.log("input render now");
        return (
          <CommentInput
            placeholder="Say Something..."
            type="text"
            inputColor="black"
            value={this.state.InputValue}
            onKeyPress={this.handleCommentKeyPress}
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
        {this.state.seenButton && this.props.type === "SEARCH" && (
          <SubmitButton onClick={this.handlePost}>Search</SubmitButton>
        )}
        {this.state.seenButton && this.props.type === "COMMENT" && (
          <SubmitComment onClick={this.handlePostComment}>Post</SubmitComment>
        )}
      </>
    );
  }
}

export default InputBox;
