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
import Button from "../../../../components/Button";
import InputBox from "../../../../components/InputBox";
import Accordion from "../../../../components/Accordion";
import imgNotFound from "../../../../media/empty_data_set.png";
import collectNote from "../../../../apis/collectNote";
import likeNote from "../../../../apis/likeNote";
import getUserRelationship from "../../../../apis/getUserRelationship";
import followUser from "../../../../apis/followUser";
import unFollowUser from "../../../../apis/unFollowUser";

const NoteCard = styled(FlexBox)`
  flex-direction: row;
  flex-shrink: 0;
  width: 1000px;

  padding: 3px;
  margin: 15px auto 0 auto;
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

const loadingLabel = styled.p`
  margin: 0 auto;
  padding: 0;
`;

class NotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteData: null,
      noteLikes: 0,
      noteCollects: 0,
      noteImages: null,
      likeActive: false,
      collectActive: false,
      followActive: false,
      isFollowActive: false,
      commentData: null,
      likeUsersData: null,
      collectUsersData: null,
      followedUserId: null,
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleCollectChange = this.handleCollectChange.bind(this);
    this.handleLikeChange = this.handleLikeChange.bind(this);
    this.handleLikeActiveChange = this.handleLikeActiveChange.bind(this);
    this.handleCollectActiveChange = this.handleCollectActiveChange.bind(this);
    this.handleFollowActiveChange = this.handleFollowActiveChange.bind(this);
    this.handleLikeInit = this.handleLikeInit.bind(this);
    this.handleCollectInit = this.handleCollectInit.bind(this);
    this.handleFollowInit = this.handleFollowInit.bind(this);
    this.initActiveLike = this.initActiveLike.bind(this);
    this.initActiveCollect = this.initActiveCollect.bind(this);
    this.initActiveFollow = this.initActiveFollow.bind(this);
  }

  handleFollowClick() {
    const followBody = {
      userId: this.props.location.state.userId,
      followedUserId: this.state.followedUserId,
    };
    {
      this.state.isFollowActive
        ? (unFollowUser(
            this.props.location.state.userId,
            this.state.followedUserId
          ),
          this.setState({ isFollowActive: false, followActive: false }),
          this.handleFollowActiveChange())
        : (followUser(followBody),
          this.setState({ isFollowActive: true, followActive: true }),
          this.handleFollowActiveChange());
    }
  }

  handleFollowInit(active) {
    this.setState({
      followActive: active,
    });
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

  handleFollowActiveChange() {
    this.setState({
      followActive: !this.state.followActive,
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
      userId: this.props.location.state.userId,
      noteId: this.props.location.state.noteId,
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
      userId: this.props.location.state.userId,
      noteId: this.props.location.state.noteId,
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
    this.setState({
      noteData: newNote,
      noteLikes: newNote.likeNum,
      noteCollects: newNote.collectNum,
      noteImages: this.imageLoad(newNote.imageUrl),
      followedUserId: newNote.userId,
    });
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
  }

  initActiveLike(users) {
    const userId = this.props.location.state.userId;
    let active = false;
    users.map(function (user) {
      if (user.id === userId) {
        active = true;
      }
    });
    this.handleLikeInit(active);
  }

  initActiveCollect(users) {
    const userId = this.props.location.state.userId;
    let active = false;
    users.map(function (user) {
      if (user.id === userId) {
        active = true;
      }
    });
    this.handleCollectInit(active);
  }

  initActiveFollow(relationship) {
    let active = false;
    if (relationship.status === true) {
      active = true;
      this.setState({ isFollowActive: true });
    } else {
      this.setState({ isFollowActive: false });
    }
    this.handleFollowInit(active);
  }

  async componentDidMount() {
    // const note = this.props.noteId;
    // const note = this.props.match.params.id;
    const { noteId, userId } = this.props.location.state;
    await getNote(noteId).then(this.handleNoteChange);
    getCommentMini(noteId).then(this.handleCommentsChange);
    getNoteLikedUsers(noteId).then(this.initActiveLike);
    getNoteCollectedUsers(noteId).then(this.initActiveCollect);
    getUserRelationship(userId, this.state.followedUserId).then(
      this.initActiveFollow
    );
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.noteId !== this.props.noteId) {
      await getNote(this.props.location.state.noteId).then(
        this.handleNoteChange
      );
      getCommentMini(this.props.location.state.noteId).then(
        this.handleCommentsChange
      );
      getNoteLikedUsers(this.props.location.state.noteId).then(
        this.initActiveLike
      );
      getNoteCollectedUsers(this.props.location.state.noteId).then(
        this.initActiveCollect
      );
      getUserRelationship(
        his.props.location.state.userId,
        this.state.followedUserId
      ).then(this.initActiveFollow);
      console.log(this.state.followedUserId, "followedUserId in DidUpDate");
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
      followActive,
    } = this.state;

    const { params } = this.props.match;

    // console.log(this.props, "in notepage");

    if (!noteData) {
      return <NoteCard>Loading...</NoteCard>;
    }

    const backend = "http://localhost:8080";

    // console.log(this.state, "this is state in render");
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
                <Button
                  type={"AUTHORFOLLOW"}
                  followActive={followActive}
                  data={{
                    handleFollowClick: this.handleFollowClick.bind(this),
                    handleFollowActiveChange:
                      this.handleFollowActiveChange.bind(this),
                  }}
                />
              </AuthorButtonContainer>
            </AuthorContainer>
            <Accordion
              type={"NOTE"}
              noteData={noteData}
              commentData={commentData}
            />
            <FunctionSetContainer>
              <Button
                likeActive={likeActive}
                type={"LIKENOTE"}
                data={{
                  handleLikeClick: this.handleLikeClick.bind(this),
                  handleLikeActiveChange:
                    this.handleLikeActiveChange.bind(this),
                }}
              />
              <Button
                number={noteLikes}
                noteId={noteData.noteId}
                type={"LIKENOTEUSERS"}
              />
              <Button
                collectActive={collectActive}
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
              <Button type={"FORWARDNOTE"} />
            </FunctionSetContainer>
            <QuickCommentContainer>
              <InputBox
                userId={this.props.location.state.userId}
                noteId={noteData.noteId}
                type={"COMMENT"}
                handleCommentsChange={this.handleCommentsChange.bind(this)}
                commentUpdat={commentUpdate}
              />
            </QuickCommentContainer>
          </RightBox>
        </CardContainer>
      </NoteCard>
    );
  }
}

export default NotePage;
