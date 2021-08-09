import React from "react";
import styled from "styled-components";
import getNote from "../../../../apis/getNote";
import getCommentMini from "../../../../apis/getCommentMini";
import getNoteLikedUsers from "../../../../apis/getNoteLikedUsers";
import getNoteCollectedUsers from "../../../../apis/getNoteCollectedUsers";
import getProductCollectedUsers from "../../../../apis/getProductCollectedUsers";
import getProduct from "../../../../apis/getProduct";
import getProductImg from "../../../../apis/getProductImg";
import getProductNotes from "../../../../apis/getProductNotes";

import CardContainer from "../../../../components/Layout/CardContainer";
import ImageSlider from "../../../../components/Image/ImageSlider/ImageSlider";
import FlexBox from "../../../../components/Layout/FlexBox";
import CardAuthorImage from "../../../../components/Image/CardAuthorImage";
import NoteAuthorLabel from "../../../../components/TextLabel/components/NoteAuthorLabel";
import ProductNameLabel from "../../../../components/TextLabel/components/ProductNameLabel";
import BrandNameLabel from "../../../../components/TextLabel/components/BrandNameLabel";
import Button from "../../../../components/Button";
import InputBox from "../../../../components/InputBox";
import Accordion from "../../../../components/Accordion";
import imgNotFound from "../../../../media/empty_data_set.png";
import ratingMiniImage from "../../../../media/rating_smp_sml.png";
import collectProduct from "../../../../apis/collectProduct";
import likeNote from "../../../../apis/likeNote";
import ProductRatingStar from "../../../../components/MiniCard/ProductMiniCard/components/ProductRatingStar";
import NoteMiniCard from "../../../../components/MiniCard/NoteMiniCard";
import getPrice from "../../../../apis/getPrice";
import getProductComment from "../../../../apis/getProductComment";

const ProductCard = styled(FlexBox)`
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
  display: flex;
  justify-content: flex-start;

  padding: 0;
  margin: 0;

  width: 270px;
  height: 23px;

  font-size: 0.85rem;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
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

const NoteCards = styled.section`
  display: flex;
  flex-direction: column;
  width: 990px;
  // border: solid 0.5px #c7c7c7;
  margin: 35px auto 0 auto;
`;

const NoteCardsTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "Prata", New Paris;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: center;
  color: black;
`;

const NoteCardsPanel = styled.div`
  display: flex;
  flex-direction: row;
  // border: solid 0.5px #c7c7c7;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: null,
      productNotes: null,
      productImg: null,
      productCollects: 0,
      collectActive: false,
      commentData: null,
      collectUsersData: null,
    };

    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleCollectChange = this.handleCollectChange.bind(this);
    this.handleCollectActiveChange = this.handleCollectActiveChange.bind(this);
    this.handleCollectInit = this.handleCollectInit.bind(this);
    this.initActiveCollect = this.initActiveCollect.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleProductImgChange = this.handleProductImgChange.bind(this);
    this.handleProductNotesChange = this.handleProductNotesChange.bind(this);
  }

  handleCollectInit(active) {
    this.setState({
      collectActive: active,
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
      productId: this.props.location.state.productId,
    };
    collectProduct(collectBody).then(this.handleCollectChange);
    this.handleCollectActiveChange();
  }

  handleCollectChange(newCollect) {
    this.setState({
      productCollects: newCollect.collectCount,
    });
  }

  handleProductChange(newProduct) {
    this.setState({
      productData: newProduct,
      productCollects: newProduct.collectNum,
    });
  }

  handleProductImgChange(newImg) {
    this.setState({
      productImg: this.imageLoad(newImg),
    });
  }

  handleProductNotesChange(newNotes) {
    this.setState({
      productNotes: newNotes,
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
      imgData.image = `${prefix}/${img.imageAddress}`;
      if (img === null) imgData.image = imgNotFound;
      return imgData;
    });

    return newImages;
    //console.log(dt, "loading images");
  }

  initActiveCollect(users) {
    const userId = this.props.location.state.userId;
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
    const { productId, userId } = this.props.location.state;
    getProduct(productId).then(this.handleProductChange);
    getProductImg(productId).then(this.handleProductImgChange);
    getProductNotes(productId).then(this.handleProductNotesChange);
    getProductComment(productId).then(this.handleCommentsChange);
    getProductCollectedUsers(productId).then(this.initActiveCollect);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      getProductComment(this.props.productId).then(this.handleCommentsChange);
      getProductCollectedUsers(this.props.productId).then(
        this.initActiveCollect
      );
    }
  }

  render() {
    const {
      productCollects,
      commentData,
      commentUpdate,
      collectActive,
      productData,
      productImg,
      productNotes,
    } = this.state;

    if (!productData | !productImg | !productNotes) {
      return <ProductCard>Loading...</ProductCard>;
    }

    const backend = "http://localhost:8080";

    return (
      <>
        <ProductCard>
          <CardContainer>
            <ImageContainer>
              <ImageSlider slides={productImg} />
            </ImageContainer>
          </CardContainer>
          <CardContainer>
            <RightBox>
              <ProductSummary>
                <BrandImageContainer>
                  <CardAuthorImage src={`${backend}/${productData.logo}`} />
                </BrandImageContainer>
                <BrandInfoContainer>
                  <BrandNameLabel>{productData.brand}</BrandNameLabel>
                  <ProductNameLabel>{productData.name}</ProductNameLabel>
                  <BrandRating>
                    <ProductRatingStar
                      type={"flex-start"}
                      rating={productData.rating}
                    />
                  </BrandRating>
                </BrandInfoContainer>
              </ProductSummary>
              <Accordion
                type={"PRODUCT"}
                productData={productData}
                commentData={commentData}
              />
              <FunctionSetContainer>
                <CollectionButtons>
                  <Button
                    collectActive={collectActive}
                    number={productCollects}
                    type={"COLLECTPRODUCT"}
                    data={{
                      handleCollectClick: this.handleCollectClick.bind(this),
                      handleCollectActiveChange:
                        this.handleCollectActiveChange.bind(this),
                    }}
                  />
                  <Button
                    number={productCollects}
                    noteId={productData.productId}
                    type={"COLLECTPRODUCTUSERS"}
                  />
                </CollectionButtons>
                <Button type={"FORWARDNOTE"} />
              </FunctionSetContainer>
              <QuickCommentContainer>
                <InputBox
                  userId={this.props.location.state.userId}
                  productId={productData.productId}
                  type={"PRODUCTCOMMENT"}
                  handleCommentsChange={this.handleCommentsChange.bind(this)}
                  commentUpdate={commentUpdate}
                />
              </QuickCommentContainer>
            </RightBox>
          </CardContainer>
        </ProductCard>
        <NoteCards>
          <NoteCardsTitle>Related Notes</NoteCardsTitle>
          <NoteCardsPanel>
            <NoteMiniCard notes={productNotes} />
          </NoteCardsPanel>
        </NoteCards>
      </>
    );
  }
}

export default ProductPage;
