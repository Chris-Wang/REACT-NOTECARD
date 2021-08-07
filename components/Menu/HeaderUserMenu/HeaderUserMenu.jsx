import React from "react";
import styled from "styled-components";
import MenuTitle from "../components/MenuTitle";
import MenuItems from "../components/MenuItems";
import UserMiniCard from "../../MiniCard/UserMiniCard";
import UserMenuTitle from "../components/UserMenuTitle";
import Button from "../../Button";
import getNoteLikedUsers from "../../../apis/getNoteLikedUsers";
import HeaderMenu from "../components/HeaderMenu";

const Container = styled.div`
  display: inline-block;
`;

const UserMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  background-color: #ffffff;
  top: 40px;

  padding: 0px 3px 0 12px;
  margin: 2px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 0.6px #c7c7c7;

  width: 200px;
  height: 90px;
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
      // console.log("callback");
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
            <UserMenuTitle type="Hi, there" />
            <Button type="LOGIN" />
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
