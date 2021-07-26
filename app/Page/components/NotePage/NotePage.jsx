import React from "react";
import styled from "styled-components";
import getNote from "../../../../apis/getNote";
import postNoteComment from "../../../../apis/postNoteComment";

import CardContainer from "../../../../components/Layout/CardContainer";
import ImageLoader from "../../../../utils/ImageLoader";
import ImageSlider from "../../../../components/Image/ImageSlider/ImageSlider";
import FlexBox from "../../../../components/Layout/FlexBox";
import NoteAuthorImage from "../../../../components/Image/NoteAuthorImage";
import NoteAuthorLabel from "../../../../components/TextLabel/components/NoteAuthorLabel";
import Button from "../../../../components/Button";
import CommentInput from "../../../../components/InputBox/components/CommentInput";
import Accordion from "../../../../components/Accordion";
import imgNotFound from "../../../../media/empty_data_set.png";

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

class NotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteData: null,
      noteid: 0,
      noteLikes: 0,
      noteCollects: 0,
      noteImages: null,
      // like: 2,
      // collect: 3,
      likeActive: false,
      collectActive: false,
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleCollectClick() {
    this.setState({
      collectActive: !this.state.collectActive,
      noteCollects: this.state.collectActive
        ? this.state.noteCollects - 1
        : this.state.noteCollects + 1,
    });
  }

  handleLikeClick() {
    this.setState({
      likeActive: !this.state.likeActive,
      noteLikes: this.state.likeActive
        ? this.state.noteLikes - 1
        : this.state.noteLikes + 1,
    });
  }

  handleNoteChange(newNote) {
    // const newImages = this.imageLoad(newNote.imageUrl);
    this.setState({
      noteData: newNote,
      noteLikes: newNote.likeNum,
      noteCollects: newNote.collectNum,
      noteImages: this.imageLoad(newNote.imageUrl),
    });

    // this.imageLoad(this.state.noteImages);
  }

  handleNoteidChange(newId) {
    this.setState({
      noteid: newId,
    });
  }

  imageLoad(images) {
    const prefix = "http://localhost:8080";
    let newImages = images.map(function (img) {
      let imgData = { image: "" };
      imgData.image = `${prefix}/${img}`;
      if (img === null) imgData.image = imgNotFound;
      return imgData;
    });

    return newImages;
    //console.log(dt, "loading images");
  }

  componentDidMount() {
    const note = this.props.noteId;
    getNote(note.noteId).then(this.handleNoteChange);

    const postBody = {
      noteId: this.props.noteId.noteId,
      authorId: "c302beee-0d71-4c2b-becc-950318e51d42",
      content: "Test a post",
    };
    console.log(postBody, "is postBody");
    const rt = postNoteComment(postBody);
    console.log(rt, "is a return");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId.noteId !== this.props.noteId.noteId) {
      getNote(this.props.noteId.noteId).then(this.handleNoteChange);
    }
  }

  render() {
    const { noteData, noteLikes, noteCollects, noteImages } = this.state;

    if (!noteData) {
      return "Loading";
    }

    // console.log(noteData.noteId, "is id in notepage");
    // console.log(noteLikes, "likes in notepage");
    // console.log(noteCollects, "collects in notepage");
    const { noteId } = this.props;
    const backend = "http://localhost:8080";

    // console.log(noteImages);

    console.log(ImageLoader);

    return (
      <NoteCard>
        <CardContainer>
          <ImageContainer>
            <ImageSlider slides={noteImages} />
          </ImageContainer>
        </CardContainer>
        <CardContainer>
          <RightBox>
            <AuthorContainer>
              <AuthorAvatarContainer>
                <NoteAuthorImage src={`${backend}/${noteData.authorAvatar}`} />
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
              <Button
                // number={noteLikes}
                type={"LIKENOTE"}
                data={{
                  handleLikeClick: this.handleLikeClick.bind(this),
                }}
              />
              <Button
                number={noteLikes}
                noteId={noteData.noteId}
                type={"LIKENOTEUSERS"}
                // data={{
                //   like: this.state.like,
                // }}
              />
              <Button
                number={noteCollects}
                type={"COLLECTNOTE"}
                data={{
                  handleCollectClick: this.handleCollectClick.bind(this),
                }}
              />
              <Button
                number={noteCollects}
                noteId={noteData.noteId}
                type={"COLLECTNOTEUSERS"}
                // data={{
                //   collect: this.state.collect,
                // }}
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
