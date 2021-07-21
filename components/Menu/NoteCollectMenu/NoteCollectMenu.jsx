
import React from "react";
import styled from "styled-components";
import NoteMenu from "../components/NoteMenu";
import MenuTitle from "../components/MenuTitle";
import MenuItems from "../components/MenuItems";
import UserMiniCard from "../../MiniCard/UserMiniCard";
import getNoteCollectedUsers from "../../../apis/getNoteCollectedUsers";

const Container = styled.div`
  display: inline-block;
`;

const CollectMenu = styled(NoteMenu)`
  right: 30px;
`;
class NoteCollectMenu extends React.Component {

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
    }
  };

  componentDidMount() {
    getNoteCollectedUsers(this.props.noteId).then(this.handleUsersDataChange);
    // document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    // document.removeEventListener("mousedown", this.handleClickOutside);
  }



  render() {
    const { usersData } = this.state;

    if (!usersData) {
      return (
        <Container ref={this.container}>
        <CollectMenu>
          <MenuTitle type="Collects" />
          <MenuItems>Loading...</MenuItems>
        </CollectMenu>
        </Container>
      );
    }
    return (
      <Container ref={this.container}>
      <CollectMenu>
        <MenuTitle type="Collects" />
        <MenuItems>
          <UserMiniCard users={usersData} type="COLLECT"/>
        </MenuItems>
      </CollectMenu>
      </Container>
    );
  }
}


export default NoteCollectMenu;
