import styled from "styled-components";
import React from "react";
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
  margin: 0 0 5px 0;
  border: solid 0.6px #c7c7c7;

  height: 45px;
`;

const UserAvatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px;
  width: 30px;
  margin: 7px 0px 0px 5px;
  height: 30px;
`;

const AvatarImg = styled.img`
  flex-grow: 0;
  margin: 0 auto;
  width: 30px;
  object-fit: cover;
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
    const { users, type } = this.props;
    const backend = "http://localhost:8080";

    return (
      <>
        {users.map((user) => (
          <MiniCard key={user.id}>
            <UserAvatar>
              <AvatarImg src={`${backend}/${user.avatar}`} />
            </UserAvatar>
            <Content>
              {type === "LIKES" && (
                <ContentLabel>{user.nickName} likes this note</ContentLabel>
              )}
              {type === "COLLECT" && (
                <ContentLabel>{user.nickName} collects this note</ContentLabel>
              )}
              {type === "PRODUCTCOLLECT" && (
                <ContentLabel>
                  {user.nickName} collects this product
                </ContentLabel>
              )}
            </Content>
          </MiniCard>
        ))}
      </>
    );
  }
}

export default UserMiniCard;
