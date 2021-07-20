import React from "react";
import NoteMenu from "../components/NoteMenu";
import MenuTitle from "../components/MenuTitle";
import MenuItems from "../components/MenuItems";
import UserMiniCard from "../../MiniCard/UserMiniCard";

class NoteLikeMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { users } = this.props;

    return (
      <NoteMenu>
        <MenuTitle type = "Likes" />
        <MenuItems>
          <UserMiniCard></UserMiniCard>
        </MenuItems>      
      </NoteMenu>
    );
  }
}

export default NoteLikeMenu;
