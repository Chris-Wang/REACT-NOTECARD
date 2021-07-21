import React from "react";

import styled from "styled-components";

import CategoryBtn from "./components/CategoryBtn";
import HeaderLogoBtn from "./components/HeaderLogoBtn";
import HeaderBtn from "./components/HeaderBtn";
import HeaderLastBtn from "./components/HeaderLastBtn";
import NoteFollowBtn from "./components/NoteFollowBtn";
import NoteForwardBtn from "./components/NoteForwardBtn";
import NoteFunctionBtn from "./components/NoteFunctionBtn";
import NoteNumsBtn from "./components/NoteNumsBtn";

import HeaderLogo from "../Image/HeaderLogo";
import logoImage from "../Image/HeaderLogo/logo.png";

import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteLikeMenu from "../Menu/NoteLikeMenu";
import NoteCollectMenu from "../Menu/NoteCollectMenu";

const Container = styled.div`
  display: inline-block;
`;

const MenuOn = styled.span`
color: #a86c6d;

`;


class Button extends React.Component {
  container = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      isUserFollow: true,
      likeUsersData: null,
      collectUsersData: null,
      like: this.props.number,
      collect: this.props.number,
      likeActive: false,
      collectActive: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleUserFollowClick = this.handleUserFollowClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleCollectClick = this.handleCollectClick.bind(this);
  }

  handleUserFollowClick() {
    this.setState(state =>({
      isUserFollow: !state.isUserFollow
    }))
  }

  handleButtonClick() {
    
    this.setState(state => ({
        seen: !state.seen
    }))

  }

  handleCollectClick() {
    this.setState({
      collectActive: !this.state.collectActive,
      collect: this.state.collectActive ? this.state.collect - 1 : this.state.collect + 1
    });
  }
  
  handleLikeClick() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target) 
    ) {
      this.setState({
        seen: false,
      });
    }
  };

  renderButton(type) {
    switch (type) {
      case "CATEGORY":
        return (
          <CategoryBtn>
            <FontAwesomeIcon icon={faCompass} />
          </CategoryBtn>
        );

      case "HEADERLOGO":
        return (
          <HeaderLogoBtn>
            <HeaderLogo src={logoImage} />
          </HeaderLogoBtn>
        );

      case "HOME":
        return (
          <HeaderBtn>
            <FontAwesomeIcon icon={faHouseUser} />
          </HeaderBtn>
        );

      case "CREATENOTE":
        return (
          <HeaderBtn>
            <FontAwesomeIcon icon={faPen} />
          </HeaderBtn>
        );

      case "COLLECTEDNOTE":
        return (
          <HeaderBtn>
            <FontAwesomeIcon icon={faBook} />
          </HeaderBtn>
        );

      case "LIKEHISTORY":
        return (
          <HeaderBtn>
            <FontAwesomeIcon icon={faHeart} />
          </HeaderBtn>
        );

      case "USERPROFILE":
        return (
          <HeaderLastBtn>
            <FontAwesomeIcon icon={faUserAlt} />
          </HeaderLastBtn>
        );

      case "AUTHORFOLLOW":
        return (
        <NoteFollowBtn onClick={this.handleUserFollowClick}>
          {this.state.isUserFollow ? "Follow" : "Following"}
        </NoteFollowBtn>
        )
      case "LIKENOTE":
        return (
          <NoteFunctionBtn onClick={this.handleLikeClick}>            
            <FontAwesomeIcon icon={faHeart} />
            {this.state.like}
          </NoteFunctionBtn>
        );

      case "LIKENOTEUSERS":
        return (
          <NoteNumsBtn onClick={this.handleButtonClick} >
            {this.state.seen ? 
            (<MenuOn>{this.state.like}</MenuOn>):`${this.state.like}`
            }
          </NoteNumsBtn>
        );

      case "COLLECTNOTE":
        return (
          <NoteFunctionBtn onClick={this.handleCollectClick}>
            <FontAwesomeIcon icon={faBookmark} />
            {this.state.collect}
          </NoteFunctionBtn>
        );

      case "COLLECTNOTEUSERS":
        return (
          <NoteNumsBtn onClick={this.handleButtonClick}>
            {this.state.seen ? 
            (<MenuOn>{this.state.collect}</MenuOn>):`${this.state.collect}`
            }
          </NoteNumsBtn>
        );

      case "FORWARDNOTE":
        return (
          <NoteForwardBtn>
            <FontAwesomeIcon icon={faReply} />
          </NoteForwardBtn>
        );
    }
  }

  render() {
    // const changeNumber = this.state.liked ? this.state.like - 1 : this.state.like + 1
    return (
      <div>
        <Container ref={this.container}>
        {this.renderButton(this.props.type)}
          {this.state.seen && this.props.type === "LIKENOTEUSERS" && (
             <NoteLikeMenu noteId={this.props.noteId} seenChange = {this.handleButtonClick}/>         
          )}
          {this.state.seen && this.props.type === "COLLECTNOTEUSERS" && (
            <NoteCollectMenu noteId={this.props.noteId} seenChange = {this.handleButtonClick}/>
          )}
        </Container>
      </div>
    );
  }
}

export default Button;