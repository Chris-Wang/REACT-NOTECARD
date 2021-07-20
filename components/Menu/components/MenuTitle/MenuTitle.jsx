import React from "react";
import styled from "styled-components";
import MenuTitleLabel from "../../../TextLabel/components/NoteMenuTitleLabel"

const MenuTitleContainer = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 3px;
  width: 264px;
  height: 40px;

  font-size: 1.1em;
  font-family: "Segoe UI", sans-serif;

`;

class MenuTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { users } = this.props;

    return (
      <MenuTitleContainer>
        <MenuTitleLabel>{this.props.type}</MenuTitleLabel>
      </MenuTitleContainer>

    );
    }
}

export default MenuTitle;