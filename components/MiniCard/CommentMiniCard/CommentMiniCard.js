import styled from "styled-components";
import React from "react";
import authorAvatar from "../../../media/user_avatar3_sml.png";

const CommentsListCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  padding: 8px;
  width: 332px;

  border-radius: 5px;
  margin: 0 0 10px 0;
  border: solid 0.6px #c7c7c7;

  height: 70px;
`;

const CommentAvatorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px;
  width: 45px;
  margin: 4px 0 0px 3px;
  height: 45px;
  // border: solid 1px #a86c6d;
`;

const CommentAuthorContainer = styled.div`
  // border: solid 1px #a86c6d;
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;

  // padding: 6px 0px 6px 0px;
  width: 80px;
  height: 50px;
  padding: 0px;

  margin: 7px 0px 10px 0px;
  height: 40px;
`;

const CommentLabelContainer = styled.div`
  // border: solid 1px #a86c6d;
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;

  // padding: 6px 0px 6px 3px;
  width: 170px;
  padding: 0px 0px 0px 3px;

  margin: 0 5px 0px 0;
  height: 50px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const CommentAvatarImg = styled.img`
  flex-grow: 0;
  margin: 0 auto;

  // border: solid 1px #a86c6d;
  border-radius: 22px;
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  // &:hover{
  //     transform: translateZ(-2px);
  //     box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  // }
`;

const CommentAuthorNameLabel = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;

  font-size: 0.85em;
  font-family: sans-serif;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.18px;
  color: black;
  // border: solid 1px #a86c6d;
  word-wrap: break-word;
  text-align: center;
`;

const CommentContentLabel = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 80%;

  font-size: 0.85em;
  font-family: sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
  // border: solid 1px #a86c6d;
  word-wrap: break-word;
`;

class CommentMiniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comments } = this.props;

    return (
      <div>
        {comments.map((comment) => (
          <CommentsListCard key={comment.commentId}>
            <CommentAvatorContainer>
              <CommentAvatarImg src={authorAvatar} />
            </CommentAvatorContainer>
            <CommentAuthorContainer>
              <CommentAuthorNameLabel>
                {comment.commentAuthor}:
              </CommentAuthorNameLabel>
            </CommentAuthorContainer>
            <CommentLabelContainer>
              <CommentContentLabel>{comment.comment}</CommentContentLabel>
            </CommentLabelContainer>
          </CommentsListCard>
        ))}
      </div>
    );
  }
}

export default CommentMiniCard;
