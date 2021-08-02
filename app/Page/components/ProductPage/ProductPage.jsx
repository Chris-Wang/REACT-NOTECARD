import React from "react";
import styled from "styled-components";
import getNote from "../../../../apis/getNote";
import getCommentMini from "../../../../apis/getCommentMini";
import getNoteLikedUsers from "../../../../apis/getNoteLikedUsers";
import getNoteCollectedUsers from "../../../../apis/getNoteCollectedUsers";

import CardContainer from "../../../../components/Layout/CardContainer";
import ImageSlider from "../../../../components/Image/ImageSlider/ImageSlider";
import FlexBox from "../../../../components/Layout/FlexBox";
import NoteAuthorImage from "../../../../components/Image/NoteAuthorImage";
import NoteAuthorLabel from "../../../../components/TextLabel/components/NoteAuthorLabel";
import ProductNameLabel from "../../../../components/TextLabel/components/ProductNameLabel";
import BrandNameLabel from "../../../../components/TextLabel/components/BrandNameLabel";
import Button from "../../../../components/Button";
import InputBox from "../../../../components/InputBox";
import Accordion from "../../../../components/Accordion";
import imgNotFound from "../../../../media/empty_data_set.png";
import ratingMiniImage from "../../../../media/rating_smp_sml.png";
import collectNote from "../../../../apis/collectNote";
import likeNote from "../../../../apis/likeNote";

const ProductCard = styled(FlexBox)`
  flex-direction: row;
  flex-shrink: 0;
  width: 1000px;

  padding: 3px;
  margin: 0 auto;
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
  margin: 0;
`;

const ProductSummary = styled(FlexBox)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0;
  margin: 0;
  // width: 400px;
  height: 80px;
`;

const BrandImageContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: 80px;
  height: 80px;
  margin: 0;
`;

const BrandInfoContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
  width: 275px;
  height: 80px;
`;

const BrandRating = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 0;
  margin: 0;

  width: 270px;
  height: 23px;

  font-size: 1em;
  font-family: New Paris;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
`;

const BrandRatingImg = styled.img`
  flex-grow: 0;
  margin: 0 auto;

  border-radius: 4px;
`;

const BrandButtonContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;

  padding: 2px;
  width: 80px;
  height: 80px;
  margin: 0;
`;

const FunctionSetContainer = styled(FlexBox)`
  flex-direction: row;
  justify-content: space-between;

  padding: 0 15px 0 0;
  width: 358px;
  height: 50px;
`;

const CollectionButtons = styled(FlexBox)`
  flex-direction: row;
  padding: 0;
  // justify-content: flex-start;

  // padding: 0;
  // width: 358px;
  // height: 50px;
`;

const QuickCommentContainer = styled(FlexBox)`
  position: relative;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  border: solid 0.5px #c7c7c7;

  padding: 10px;
  margin: 0 px 2px 0px 2px;
  width: 352px;
  height: 50px;
`;

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteData: null,
      noteLikes: 0,
      noteCollects: 0,
      noteImages: null,
      likeActive: false,
      collectActive: false,
      commentData: null,
      likeUsersData: null,
      collectUsersData: null,
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleCollectChange = this.handleCollectChange.bind(this);
    this.handleLikeChange = this.handleLikeChange.bind(this);
    this.handleLikeActiveChange = this.handleLikeActiveChange.bind(this);
    this.handleCollectActiveChange = this.handleCollectActiveChange.bind(this);
    this.handleLikeInit = this.handleLikeInit.bind(this);
    this.handleCollectInit = this.handleCollectInit.bind(this);
    this.initActiveLike = this.initActiveLike.bind(this);
    this.initActiveCollect = this.initActiveCollect.bind(this);
  }

  handleLikeInit(active) {
    this.setState({
      likeActive: active,
    });
  }

  handleCollectInit(active) {
    this.setState({
      collectActive: active,
    });
  }

  handleLikeActiveChange() {
    this.setState({
      likeActive: !this.state.likeActive,
    });
  }

  handleCollectActiveChange() {
    this.setState({
      collectActive: !this.state.collectActive,
    });
  }

  handleCollectClick() {
    const collectBody = {
      userId: this.props.userId,
      noteId: this.props.noteId,
    };
    collectNote(collectBody).then(this.handleCollectChange);
    this.handleCollectActiveChange();
  }

  handleCollectChange(newCollect) {
    this.setState({
      noteCollects: newCollect.collectCount,
    });
  }

  handleLikeClick() {
    const likeBody = {
      userId: this.props.userId,
      noteId: this.props.noteId,
    };
    likeNote(likeBody).then(this.handleLikeChange);
    this.handleLikeActiveChange();
  }

  handleLikeChange(newLike) {
    this.setState({
      noteLikes: newLike.likeCount,
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

  handleCommentsChange(newComments) {
    this.setState({
      commentData: newComments,
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

  initActiveLike(users) {
    const userId = this.props.userId;
    let active = false;
    users.map(function (user) {
      //console.log(user.id, "in active");
      if (user.id === userId) {
        // console.log(user.id, "in active");
        active = true;
      }
    });
    this.handleLikeInit(active);
  }

  initActiveCollect(users) {
    const userId = this.props.userId;
    let active = false;
    users.map(function (user) {
      //console.log(user.id, "in active");
      if (user.id === userId) {
        // console.log(user.id, "in active");
        active = true;
      }
    });
    this.handleCollectInit(active);
  }

  componentDidMount() {
    const note = this.props.match.params.id;
    getNote(note).then(this.handleNoteChange);
    getCommentMini(note).then(this.handleCommentsChange);
    getNoteLikedUsers(note).then(this.initActiveLike);
    getNoteCollectedUsers(note).then(this.initActiveCollect);

    // console.log(this.state, "state in didMount");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId !== this.props.noteId) {
      getNote(this.props.noteId).then(this.handleNoteChange);
      getCommentMini(this.props.noteId).then(this.handleCommentsChange);
      getNoteLikedUsers(this.props.noteId).then(this.initActiveLike);
      getNoteCollectedUsers(this.props.noteId).then(this.initActiveCollect);
      // const active = getNoteLikedUsers(this.props.noteId).then(
      //   this.initActiveLike
      // );
      // active.then(this.handleLikeInit);
    }
  }

  render() {
    const {
      noteData,
      noteLikes,
      noteCollects,
      noteImages,
      commentData,
      commentUpdate,
      likeActive,
      collectActive,
    } = this.state;

    if (!noteData) {
      return "Loading";
    }

    // console.log(noteData.noteId, "is id in notepage");
    // console.log(noteLikes, "likes in notepage");
    // console.log(noteCollects, "collects in notepage");
    // const { userId } = this.props;
    const backend = "http://localhost:8080";

    // console.log(noteImages);
    console.log(this.state, "this is state in render");

    // console.log(ImageLoader);

    //console.log(this.props, "props in notepage");

    return (
      <ProductCard>
        <CardContainer>
          <ImageContainer>
            <ImageSlider slides={noteImages} />
          </ImageContainer>
        </CardContainer>
        <CardContainer>
          <RightBox>
            <ProductSummary>
              <BrandImageContainer>
                <NoteAuthorImage src={`${backend}/${noteData.authorAvatar}`} />
              </BrandImageContainer>
              <BrandInfoContainer>
                <BrandNameLabel>Yves Saint Laurent</BrandNameLabel>
                <ProductNameLabel>
                  ColorBar Perfect Match Primer
                </ProductNameLabel>
                <BrandRating>
                  <BrandRatingImg src={ratingMiniImage} />
                </BrandRating>
              </BrandInfoContainer>
            </ProductSummary>
            <Accordion
              type={"PRODUCT"}
              noteData={noteData}
              commentData={commentData}
            />
            <FunctionSetContainer>
              <CollectionButtons>
                <Button
                  collectActive={collectActive}
                  number={noteCollects}
                  type={"COLLECTNOTE"}
                  data={{
                    handleCollectClick: this.handleCollectClick.bind(this),
                    handleCollectActiveChange:
                      this.handleCollectActiveChange.bind(this),
                  }}
                />
                <Button
                  number={noteCollects}
                  noteId={noteData.noteId}
                  type={"COLLECTNOTEUSERS"}
                />
              </CollectionButtons>
              <Button type={"FORWARDNOTE"} />
            </FunctionSetContainer>
            <QuickCommentContainer>
              <InputBox
                userId={this.props.userId}
                noteId={noteData.noteId}
                type={"COMMENT"}
                handleCommentsChange={this.handleCommentsChange.bind(this)}
                commentUpdat={commentUpdate}
              />
            </QuickCommentContainer>
          </RightBox>
        </CardContainer>
      </ProductCard>
    );
  }
}

export default ProductPage;