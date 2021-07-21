import styled from "styled-components";
import React from "react";
import userAvator from "../../../media/user_avatar2_sml.png";
import ContentLabel from "../../TextLabel/components/MiniCardUserContentLabel";

const MiniCard = styled.div`
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

const UserAvatar = styled.div`
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

const AvatarImg = styled.img`
  flex-grow: 0;
  margin: 0 auto;

  border-radius: 20px;
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;

  width: 210px;
  padding: 0px;

  margin: 0px 0px 0px 0px;
  height: 40px;
`;

class UserMiniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;

    return (
      <>
        {users.map((user) => (
          <MiniCard>
            <UserAvatar>
              <AvatarImg src={userAvator} />
            </UserAvatar>
            <Content>
              <ContentLabel>{user} like this note</ContentLabel>
            </Content>
          </MiniCard>
        ))}
      </>
    );
  }
}

export default UserMiniCard;
