import styled from "styled-components";
import FlexBox from "../../Layout/FlexBox";
import React from "react";
import userAvator from "../../../media/user_avatar2_sml.png"

const LikeUserListContainer = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  background-color: #ffffff;
  bottom: 125px;
  right: 100px;

  padding: 0px 3px 0 12px;
  margin: 2px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  width: 280px;
  height: 300px;
`;

const MenuTitleContainer = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 3px;
  width: 264px;
  height: 40px;

  font-size: 1.1em;
  font-family: "Segoe UI", sans-serif;

`;

const MenuTitleLabel = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  font-size: 1em;
  font-family: sans-serif;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;

`;

const MenuItemsContainer = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 0 5px 0 0;
  width: 264px;
  flex-direction: column;

  overflow-y: scroll;
  overflow-x: hidden;
  align-content: center;

  //border: solid 0.6px #c7c7c7;
  height: 247px;
`;

const NoteMenuMiniUserCard = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
box-sizing: border-box;

padding: 0px;
width: 256px;

border-radius: 5px;
margin: 0 0 9px 0;
border: solid 0.6px #c7c7c7;

height: 40px;
`;

const MenuUserAvatarContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
box-sizing: border-box;
padding: 0px;
width: 30px;
margin: 5px 3px 5px 7px;
height: 30px;
`;

const MenuUserAvatarImg = styled.img`
flex-grow: 0;
margin: 0 auto;


border-radius: 20px;
transition-property: transform, box-shadow;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;

`;

const MenuUserContentContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
box-sizing: border-box;
align-items: center;

// padding: 6px 0px 6px 0px;
width: 210px;
padding: 0px;

margin: 0px 0px 0px 0px;
height: 40px;

`;

const MenuUserContentLabel = styled.div`
width: 100%;
box-sizing: border-box;
height: 50%;

margin-left: 5px;
font-size: 0.8em;
font-family: sans-serif;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.2;
letter-spacing: 0.18px;
text-align: left;
color: black;
word-wrap: break-word;
overflow-y: scroll;
overflow-x: hidden;
`;

class NoteLikeMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { users } = this.props;

    return (
      <LikeUserListContainer>
        <MenuTitleContainer>
          <MenuTitleLabel>Likes</MenuTitleLabel>
        </MenuTitleContainer>
        <MenuItemsContainer>
          <NoteMenuMiniUserCard>
            <MenuUserAvatarContainer>
              <MenuUserAvatarImg src = {userAvator} />
            </MenuUserAvatarContainer>
            <MenuUserContentContainer>
              <MenuUserContentLabel>ThompsonCamille like this note</MenuUserContentLabel>
            </MenuUserContentContainer>
          </NoteMenuMiniUserCard>
          <NoteMenuMiniUserCard>
            <MenuUserAvatarContainer>
              <MenuUserAvatarImg src = {userAvator} />
            </MenuUserAvatarContainer>
            <MenuUserContentContainer></MenuUserContentContainer>
          </NoteMenuMiniUserCard>
          <NoteMenuMiniUserCard>
            <MenuUserAvatarContainer>
              <MenuUserAvatarImg src = {userAvator} />
            </MenuUserAvatarContainer>
            <MenuUserContentContainer></MenuUserContentContainer>
          </NoteMenuMiniUserCard>
          <NoteMenuMiniUserCard>
            <MenuUserAvatarContainer>
              <MenuUserAvatarImg src = {userAvator} />
            </MenuUserAvatarContainer>
            <MenuUserContentContainer></MenuUserContentContainer>
          </NoteMenuMiniUserCard>
          <NoteMenuMiniUserCard>
            <MenuUserAvatarContainer>
              <MenuUserAvatarImg src = {userAvator} />
            </MenuUserAvatarContainer>
            <MenuUserContentContainer></MenuUserContentContainer>
          </NoteMenuMiniUserCard>  
        </MenuItemsContainer>
        
        
      </LikeUserListContainer>
    );
  }
}

export default NoteLikeMenu;
