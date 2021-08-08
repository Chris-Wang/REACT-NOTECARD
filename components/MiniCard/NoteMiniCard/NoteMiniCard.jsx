import styled from "styled-components";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  border: solid 0.5px #c7c7c7;
  height: 380px;
  border-radius: 10px;
  margin: 0 8px 20px 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 1px 4px 1px #a86c6d;
  }
`;

const MiniImg = styled.img`
  width: 100%;
  height: 80%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  // border: solid 0.5px #c7c7c7;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // border: solid 0.5px #c7c7c7;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  padding: 6px 0 0 10px;
`;

const NoteTitle = styled.div`
  font-size: 0.9rem;
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
  padding-bottom: 6px;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  // border: solid 0.5px #c7c7c7;
  height: 100%;
`;

const AuthorName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  // border: solid 0.5px #c7c7c7;
  height: 100%;
  padding: 0 5px 0 5px;
`;

const NameLabel = styled.div`
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
  padding：0；
  margin: 0 auto;

  word-wrap: break-word;
  text-align: center;
`;

const AuthorLikes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
  // border: solid 0.5px #c7c7c7;
  height: 100%;
  padding-right: 10px;
`;

const HeartContainer = styled.div`
  // border: solid 0.5px #c7c7c7;
  color: #a86c6d;
`;

const LikeLabel = styled.div`
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
  padding：0;
  margin-left:5px;
// border: solid 0.5px #c7c7c7;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 15px;
  // border: solid 0.5px #c7c7c7;
`;

const defaultUID = "16a0b5a3-d732-47ed-b9aa-6a5fa31931e2";
class NoteMiniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  notePath = (noteData) => {
    return {
      pathname: "/notes",
      state: noteData,
    };
  };

  onForward = (nId) => {
    const noteData = {
      noteId: nId,
      userId: defaultUID,
    };
    // console.log(noteData, "in on forward");
    this.props.history.push(this.notePath(noteData));
  };

  render() {
    const { notes } = this.props;
    const backend = "http://localhost:8080";
    if (!notes) {
      return <MiniCard>Loading...</MiniCard>;
    }

    return (
      <>
        {notes.map((note) => (
          <MiniCard
            key={note.noteId}
            onClick={this.onForward.bind(this, note.noteId)}
          >
            <MiniImg src={`${backend}/${note.imageUrl}`} />
            <CardInfo>
              <TitleContainer>
                <NoteTitle>{note.title}</NoteTitle>
              </TitleContainer>
              <NoteStat>
                <AvatarContainer>
                  <Avatar src={`${backend}/${note.authorAvatar}`} />
                </AvatarContainer>
                <AuthorName>
                  <NameLabel>{note.author}</NameLabel>
                </AuthorName>
                <AuthorLikes>
                  <HeartContainer>
                    <FontAwesomeIcon icon={faHeart} />
                  </HeartContainer>
                  <LikeLabel>{note.likeNum}</LikeLabel>
                </AuthorLikes>
              </NoteStat>
            </CardInfo>
          </MiniCard>
        ))}
      </>
    );
  }
}

export default withRouter(NoteMiniCard);
