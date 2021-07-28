import React from "react";
import styled from "styled-components";
import NoteMenu from "../components/NoteMenu";
import MenuTitle from "../components/MenuTitle";
import MenuItems from "../components/MenuItems";
import UserMiniCard from "../../MiniCard/UserMiniCard";
import getNoteLikedUsers from "../../../apis/getNoteLikedUsers";
import HeaderMenu from "../components/HeaderMenu";

const Container = styled.div`
  display: inline-block;
`;

const LikeMenu = styled(HeaderMenu)`
  right: 30px;
  z-index: 100;
`;

class HeaderLikeMenu extends React.Component {
  container = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      userLikeData: null,
      userFollowData: null,
      seen: false,
    };

    this.handleUsersDataChange = this.handleUsersDataChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleUsersDataChange = (newData) => {
    this.setState(() => {
      return {
        usersData: newData,
      };
    });
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.props.seenChange;
      console.log("callback");
    }
  };

  componentDidMount() {
    // getNoteLikedUsers(this.props.noteId).then(this.handleUsersDataChange);
    // document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    // document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { userLikeData, userFollowData } = this.state;

    if (!userLikeData | !userFollowData) {
      return (
        <Container ref={this.container}>
          <LikeMenu>
            <MenuTitle type="Your Likes and Follows" />
            <MenuItems>Loading...</MenuItems>
          </LikeMenu>
        </Container>
      );
    }
    return (
      <Container ref={this.container}>
        <LikeMenu>
          <MenuTitle type="Your Likes and Follows" />
          <MenuItems>
            <UserMiniCard users={userLikeData} type="LIKES" />
          </MenuItems>
        </LikeMenu>
      </Container>
    );
  }
}

export default HeaderLikeMenu;
