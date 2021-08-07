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
import BrandFollowBtn from "./components/BrandFollowBtn";
import UserLoginBtn from "./components/UserLoginBtn";
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
import ProductCollectMenu from "../Menu/ProductCollectMenu";
import HeaderLikeMenu from "../Menu/HeaderLikeMenu";
import HeaderCollectMenu from "../Menu/HeaderCollectMenu";
import HeaderUserMenu from "../Menu/HeaderUserMenu";
import CategoriesListMenu from "../Menu/CategoriesListMenu";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  display: inline-block;
`;

const MenuOn = styled.span`
  color: #a86c6d;
`;

const HeaderMenuOn = styled.span`
  color: #ffffff;
`;

const ActiveFunctionBtn = styled(NoteFunctionBtn)`
  color: #a86c6d;
`;

const FollowingStatus = styled(NoteFollowBtn)`
  color: black;
  background-color: #c7c7c7;
`;

class Button extends React.Component {
  container = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      likeUsersData: null,
      collectUsersData: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickExplore = this.handleClickExplore.bind(this);
  }

  handleButtonClick() {
    this.setState((state) => ({
      seen: !state.seen,
    }));
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

  handleClickExplore = () => {
    console.log(this.props, "click explore");
    this.props.history.push("/");
  };

  renderButton(type) {
    switch (type) {
      case "CATEGORY":
        return (
          <CategoryBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <HeaderMenuOn>
                <FontAwesomeIcon icon={faCompass} />
              </HeaderMenuOn>
            ) : (
              <FontAwesomeIcon icon={faCompass} />
            )}
          </CategoryBtn>
        );

      case "HEADERLOGO":
        return (
          <HeaderLogoBtn onClick={this.handleClickExplore}>
            <HeaderLogo src={logoImage} />
          </HeaderLogoBtn>
        );

      case "HOME":
        return (
          <HeaderBtn onClick={this.handleClickExplore}>
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
          <HeaderBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <HeaderMenuOn>
                <FontAwesomeIcon icon={faBook} />
              </HeaderMenuOn>
            ) : (
              <FontAwesomeIcon icon={faBook} />
            )}
          </HeaderBtn>
        );

      case "LIKEHISTORY":
        return (
          <HeaderBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <HeaderMenuOn>
                <FontAwesomeIcon icon={faHeart} />
              </HeaderMenuOn>
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </HeaderBtn>
        );

      case "USERPROFILE":
        return (
          <HeaderLastBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <HeaderMenuOn>
                <FontAwesomeIcon icon={faUserAlt} />
              </HeaderMenuOn>
            ) : (
              <FontAwesomeIcon icon={faUserAlt} />
            )}
          </HeaderLastBtn>
        );

      case "LOGIN":
        return (
          <UserLoginBtn onClick={this.handleClickExplore}>Login</UserLoginBtn>
        );

      case "AUTHORFOLLOW":
        return (
          <NoteFollowBtn onClick={this.props.data.handleFollowClick}>
            {this.props.followActive ? (
              <FollowingStatus>Following</FollowingStatus>
            ) : (
              "Follow"
            )}
          </NoteFollowBtn>
        );

      case "BRANDFOLLOW":
        return (
          <BrandFollowBtn onClick={this.handleUserFollowClick}>
            {this.state.isUserFollow ? "Follow" : "Following"}
          </BrandFollowBtn>
        );

      case "LIKENOTE":
        return (
          <NoteFunctionBtn onClick={this.props.data.handleLikeClick}>
            {this.props.likeActive ? (
              <MenuOn>
                <FontAwesomeIcon icon={faHeart} />
              </MenuOn>
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </NoteFunctionBtn>
        );

      case "LIKENOTEUSERS":
        return (
          <NoteNumsBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <MenuOn>{this.props.number}</MenuOn>
            ) : (
              `${this.props.number}`
            )}
          </NoteNumsBtn>
        );
      case "COLLECTNOTE":
        return (
          <NoteFunctionBtn onClick={this.props.data.handleCollectClick}>
            {this.props.collectActive ? (
              <MenuOn>
                <FontAwesomeIcon icon={faBookmark} />
              </MenuOn>
            ) : (
              <FontAwesomeIcon icon={faBookmark} />
            )}
          </NoteFunctionBtn>
        );

      case "COLLECTPRODUCT":
        return (
          <NoteFunctionBtn onClick={this.props.data.handleCollectClick}>
            {this.props.collectActive ? (
              <MenuOn>
                <FontAwesomeIcon icon={faBookmark} />
              </MenuOn>
            ) : (
              <FontAwesomeIcon icon={faBookmark} />
            )}
          </NoteFunctionBtn>
        );

      case "COLLECTNOTEUSERS":
        return (
          <NoteNumsBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <MenuOn>{this.props.number}</MenuOn>
            ) : (
              `${this.props.number}`
            )}
          </NoteNumsBtn>
        );

      case "COLLECTPRODUCTUSERS":
        return (
          <NoteNumsBtn onClick={this.handleButtonClick}>
            {this.state.seen ? (
              <MenuOn>{this.props.number}</MenuOn>
            ) : (
              `${this.props.number}`
            )}
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
    return (
      <div>
        <Container ref={this.container}>
          {this.renderButton(this.props.type)}
          {this.state.seen && this.props.type === "COLLECTEDNOTE" && (
            <HeaderCollectMenu
              noteId={this.props.noteId}
              seenChange={this.handleButtonClick}
            />
          )}
          {this.state.seen && this.props.type === "LIKEHISTORY" && (
            <HeaderLikeMenu
              noteId={this.props.noteId}
              seenChange={this.handleButtonClick}
            />
          )}
          {this.state.seen && this.props.type === "USERPROFILE" && (
            <HeaderUserMenu
              noteId={this.props.noteId}
              seenChange={this.handleButtonClick}
            />
          )}
          {this.state.seen && this.props.type === "LIKENOTEUSERS" && (
            <NoteLikeMenu
              noteId={this.props.noteId}
              seenChange={this.handleButtonClick}
            />
          )}
          {this.state.seen && this.props.type === "COLLECTNOTEUSERS" && (
            <NoteCollectMenu
              noteId={this.props.noteId}
              seenChange={this.handleButtonClick}
            />
          )}
          {this.state.seen && this.props.type === "COLLECTPRODUCTUSERS" && (
            <ProductCollectMenu
              noteId={this.props.noteId}
              seenChange={this.handleButtonClick}
            />
          )}
          {this.state.seen && this.props.type === "CATEGORY" && (
            <CategoriesListMenu seenChange={this.handleButtonClick} />
          )}
        </Container>
      </div>
    );
  }
}

export default withRouter(Button);
