import React from "react";
import styled from "styled-components";
import MenuTitle from "../components/MenuTitle";
import MenuItems from "../components/MenuItems";
import UserMiniCard from "../../MiniCard/UserMiniCard";
import getNoteLikedUsers from "../../../apis/getNoteLikedUsers";
import HeaderMenu from "../components/HeaderMenu";

const Container = styled.div`
  display: inline-block;
`;

const UserMenu = styled(HeaderMenu)`
  right: -2px;
  z-index: 100;
`;

class HeaderUserMenu extends React.Component {
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
          <UserMenu>
            <MenuTitle type="User Panel" />
            <MenuItems>Loading...</MenuItems>
          </UserMenu>
        </Container>
      );
    }
    return (
      <Container ref={this.container}>
        <UserMenu>
          <MenuTitle type="User Panel" />
          <MenuItems>
            <UserMiniCard users={userLikeData} type="LIKES" />
          </MenuItems>
        </UserMenu>
      </Container>
    );
  }
}

export default HeaderUserMenu;
