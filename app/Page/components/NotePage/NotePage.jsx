import React from "react";
import styled from "styled-components";
import avatarImage from "../../../../media/user_avatar.png";
import getNote from "../../../../apis/getNote";

import CardContainer from "../../../../components/Layout/CardContainer";
import ImageLoader from "../../../../utils/ImageLoader";
import ImageSlider from "../../../../components/Image/ImageSlider/ImageSlider";
import FlexBox from "../../../../components/Layout/FlexBox";
import NoteAuthorImage from "../../../../components/Image/NoteAuthorImage";
import NoteAuthorLabel from "../../../../components/TextLabel/components/NoteAuthorLabel";
import Button from "../../../../components/Button";
import CommentInput from "../../../../components/InputBox/components/CommentInput";
import Accordion from "../../../../components/Accordion";

const NoteCard = styled(FlexBox)`
  flex-direction: row;
  flex-shrink: 0;
  width: 1000px;

  padding: 3px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #a86c6d;
  position: relative;
`;

const ImageContainer = styled(FlexBox)`
  padding: 20px 10px 20px 25px;
`;

const RightBox = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  padding: 20px 25px 20px 15px;
`;

const AuthorContainer = styled(FlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  width: 358px;
  height: 80px;
`;

const AuthorAvatarContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: 80px;
  height: 80px;
`;

const AuthorNameContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;

  padding-left: 5px;
  padding-right: 5px;
  width: 170px;
  height: 80px;
`;

const AuthorButtonContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: 100px;
  height: 80px;
`;

const FunctionSetContainer = styled(FlexBox)`
  flex-direction: row;
  justify-content: flex-start;

  padding: 0;
  width: 358px;
  height: 50px;
`;

const QuickCommentContainer = styled(FlexBox)`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  border: solid 0.5px #c7c7c7;

  padding: 10px;
  margin: 0 px 2px 0px 2px;
  width: 352px;
  height: 50px;
`;

const noteid = "2";
const getNoteInfo = () => getNote(noteid);

class NotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteData: null,
      noteid: 0,
      noteLikes: 0,
      noteCollects: 0,
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleNoteChange(newNote) {
    this.setState({
      noteData: newNote,
      noteLikes: newNote.likeNum,
      noteCollects: newNote.collectNum,
    });
  }

  handleNoteidChange(newId) {
    this.setState({
      noteid: newId,
    });
  }

  componentDidMount() {
    const note = this.props.noteId;
    getNote(note.noteId).then(this.handleNoteChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId.noteId !== this.props.noteId.noteId) {
      getNote(this.props.noteId.noteId).then(this.handleNoteChange);
    }
  }

  render() {
    const { noteData, noteLikes, noteCollects } = this.state;

    if (!noteData) {
      return "Loading";
    }

    console.log(noteData.noteId, "is id in notepage");
    console.log(noteLikes, "likes in notepage");
    console.log(noteCollects, "collects in notepage");
    const { noteId } = this.props;

    return (
      <NoteCard>
        <CardContainer>
          <ImageContainer>
            <ImageSlider slides={ImageLoader} />
          </ImageContainer>
        </CardContainer>
        <CardContainer>
          <RightBox>
            <AuthorContainer>
              <AuthorAvatarContainer>
                <NoteAuthorImage src={avatarImage} />
              </AuthorAvatarContainer>
              <AuthorNameContainer>
                <NoteAuthorLabel>{noteData.author}</NoteAuthorLabel>
              </AuthorNameContainer>
              <AuthorButtonContainer>
                <Button type={"AUTHORFOLLOW"} />
              </AuthorButtonContainer>
            </AuthorContainer>
            <Accordion noteData={noteData} />
            <FunctionSetContainer>
              <Button number={noteLikes} type={"LIKENOTE"} />
              <Button
                number={noteLikes}
                noteId={noteData.noteId}
                type={"LIKENOTEUSERS"}
              />
              <Button number={noteCollects} type={"COLLECTNOTE"} />
              <Button
                number={noteCollects}
                noteId={noteData.noteId}
                type={"COLLECTNOTEUSERS"}
              />
              <Button type={"FORWARDNOTE"} />
            </FunctionSetContainer>
            <QuickCommentContainer>
              <CommentInput
                defaultValue="Say Something..."
                type="text"
                inputColor="black"
              />
            </QuickCommentContainer>
          </RightBox>
        </CardContainer>
      </NoteCard>
    );
  }
}

export default NotePage;
