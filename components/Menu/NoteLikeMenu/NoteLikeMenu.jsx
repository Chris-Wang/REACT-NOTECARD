import React from "react";

import styled from "styled-components";
import NoteMenu from "../components/NoteMenu";
import MenuTitle from "../components/MenuTitle";
import MenuItems from "../components/MenuItems";
import UserMiniCard from "../../MiniCard/UserMiniCard";
import getNoteLikedUsers from "../../../apis/getNoteLikedUsers";
import getCommentMini from "../../../apis/getCommentMini";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: inline-block;
`;
class NoteLikeMenu extends React.Component {

  container = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      usersData: null,
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
    getNoteLikedUsers(this.props.noteId).then(this.handleUsersDataChange);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }



  render() {
    const { usersData } = this.state;

    if (!usersData) {
      return (
        <Container ref={this.container}>
        <NoteMenu>
          <MenuTitle type="Likes" />
          <MenuItems>Loading...</MenuItems>
        </NoteMenu>
        </Container>
      );
    }
    return (
      <Container ref={this.container}>
      <NoteMenu>
        <MenuTitle type="Likes" />
        <MenuItems>
          <UserMiniCard users={usersData} />
        </MenuItems>
      </NoteMenu>
      </Container>
    );
  }
}

export default NoteLikeMenu;
