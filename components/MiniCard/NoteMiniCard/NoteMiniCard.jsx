import styled from "styled-components";
import React from "react";

const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  border: solid 0.5px #c7c7c7;
  height: 380px;
  border-radius: 10px;
  margin: 0 8px 20px 8px;
`;

const MiniImg = styled.img`
  width: 100%;
  height: 80%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  border: solid 0.5px #c7c7c7;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: solid 0.5px #c7c7c7;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  padding: 6px 0 0 10px;
`;

const NoteTitle = styled.div`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
  padding：0；
  margin: 0 auto;
`;

const NoteStat = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60%;
`;

const AvatarContainer = styled.div`
  width: 20%;
  border: solid 0.5px #c7c7c7;
  height: 100%;
`;

const AuthorName = styled.div`
  width: 45%;
  border: solid 0.5px #c7c7c7;
  height: 100%;
`;

const AuthorLikes = styled.div`
  width: 35%;
  border: solid 0.5px #c7c7c7;
  height: 100%;
`;

const Avatar = styled.img``;

class NoteMiniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { products } = this.props;
    // const backend = "http://localhost:8080";
    // if (!products) {
    //   return "Loading...";
    // }

    return (
      <>
        <MiniCard>
          <MiniImg></MiniImg>
          <CardInfo>
            <TitleContainer>
              <NoteTitle>Note Topic</NoteTitle>
            </TitleContainer>
            <NoteStat>
              <AvatarContainer></AvatarContainer>
              <AuthorName></AuthorName>
              <AuthorLikes></AuthorLikes>
            </NoteStat>
          </CardInfo>
        </MiniCard>
      </>
    );
  }
}

export default NoteMiniCard;
