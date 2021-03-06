import React from "react";

import SearchInput from "./components/SearchInput";
import CommentInput from "./components/CommentInput";
import SubmitButton from "./components/SubmitButton";
import SubmitComment from "./components/SubmitComment";
import getCommentMini from "../../apis/getCommentMini";
import getProductComment from "../../apis/getProductComment";
import postProductComment from "../../apis/postProductComment";
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
    this.setState({
      commentData: newData,
    });
  }

  handleGetInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
      seenButton: true,
    });
  };

  handlePost = () => {
    const { inputValue } = this.state;
    this.props.updateId(inputValue);
    this.setState({
      seenButton: false,
    });
  };

  handlePostComment = () => {
    const { inputValue } = this.state;
    const postBody = {
      noteId: this.props.noteId,
      authorId: this.props.userId,
      content: inputValue,
    };
    this.sendUpdate(postBody);
    this.setState({
      seenButton: false,
    });
  };

  handlePostProductComment = () => {
    const { inputValue } = this.state;
    const postBody = {
      productId: this.props.productId,
      authorId: this.props.userId,
      content: inputValue,
    };
    this.sendProductCommentUpdate(postBody);
    this.setState({
      seenButton: false,
    });
  };

  async sendUpdate(postBody) {
    await postNoteComment(postBody);
    getCommentMini(this.props.noteId).then(this.props.handleCommentsChange);
    console.log("in sendUpdate <InputBox>");
  }

  async sendProductCommentUpdate(postBody) {
    await postProductComment(postBody);
    getProductComment(this.props.productId).then(
      this.props.handleCommentsChange
    );
  }

  handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handlePost();
    }
  };

  handleCommentKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handlePostComment();
    }
  };

  handleProductCommentKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handlePostProductComment();
    }
  };

  renderInputBox(type) {
    switch (type) {
      case "SEARCH":
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

      case "NOTECOMMENT":
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

      case "PRODUCTCOMMENT":
        return (
          <CommentInput
            placeholder="Say Something..."
            type="text"
            inputColor="black"
            value={this.state.InputValue}
            onKeyPress={this.handleProductCommentKeyPress}
            onChange={this.handleGetInputValue}
          />
        );
    }
  }

  render() {
    return (
      <>
        {this.renderInputBox(this.props.type)}
        {this.state.seenButton && this.props.type === "SEARCH" && (
          <SubmitButton onClick={this.handlePost}>Search</SubmitButton>
        )}
        {this.state.seenButton && this.props.type === "NOTECOMMENT" && (
          <SubmitComment onClick={this.handlePostComment}>Post</SubmitComment>
        )}
        {this.state.seenButton && this.props.type === "PRODUCTCOMMENT" && (
          <SubmitComment onClick={this.handlePostProductComment}>
            Post
          </SubmitComment>
        )}
      </>
    );
  }
}

export default InputBox;
