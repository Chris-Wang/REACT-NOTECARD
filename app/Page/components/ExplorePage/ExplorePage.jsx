import React from "react";
import styled from "styled-components";
import FlexBox from "../../../../components/Layout/FlexBox";
import { Route, Link } from "react-router-dom";
import NotePage from "../NotePage";
import ProductPage from "../ProductPage";

import getExploreProduct from "../../../../apis/getExploreProduct";
import getExploreNote from "../../../../apis/getExploreNote";

const ExploreCard = styled.div`
  box-sizing: border-box;
  width: 1000px;
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
  border-radius: 10px;
  // border: solid 1px #a86c6d;
  position: relative;
`;

const SmlCardsBox = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 670px;
  padding: 0;
  margin: 0 auto;
  border-radius: 10px;
  // border: solid 1px #a86c6d;
  position: relative;

  display: grid;
  gap: 0;
  grid-template-columns: repeat(3, 1fr);
`;

const MidCardsBox = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 670px;
  padding: 0;
  margin: 0 auto;
  border-radius: 10px;
  // border: solid 1px #a86c6d;
  position: relative;

  display: grid;
  gap: 0;
  grid-template-areas:
    "largeCard largeCard smallTopCard"
    "largeCard largeCard smallBottomCard";
`;

const SmlCard = styled.div`
  box-sizing: border-box;
  width: 310px;
  height: 310px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    border: solid 1px #a86c6d;
    // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const SmlTopCard = styled.div`
  box-sizing: border-box;
  width: 310px;
  height: 310px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  grid-area: smallTopCard;

  cursor: pointer;

  &:hover {
    border: solid 1px #a86c6d;
    // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const SmlBtmCard = styled.div`
  box-sizing: border-box;
  width: 310px;
  height: 310px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  grid-area: smallBottomCard;
  cursor: pointer;

  &:hover {
    border: solid 1px #a86c6d;
    // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const LgCard = styled.div`
  box-sizing: border-box;
  width: 640px;
  height: 645px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;

  position: relative;
  grid-area: largeCard;

  cursor: pointer;

  &:hover {
    border: solid 1px #a86c6d;
    // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const LgCardImg = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 10px;
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  // &:hover{
  //     transform: translateZ(-2px);
  //     box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  // }
`;

const SmlCardImg = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 10px;
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  // &:hover{
  //     transform: translateZ(-2px);
  //     box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  // }
`;

const defaultUID = "3d115e74-ad43-44eb-a832-ea53ac542f61";

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteData: null,
      productsData: null,
      demoProduct: null,
      demoNote: null,
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.onForwardTop = this.onForwardTop.bind(this);
    this.onForwardBottom = this.onForwardBottom.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onForwardProduct = this.onForwardProduct.bind(this);
  }

  handleNoteChange(newNote) {
    this.setState({
      noteData: newNote,
      demoNote: newNote.slice(0, 8),
    });
  }

  handleProductChange(newProduct) {
    this.setState({
      productsData: newProduct,
      demoProduct: newProduct[2],
    });
  }

  productPath = (productData) => {
    return {
      pathname: "/products",
      state: productData,
    };
  };

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

  onForwardTop = () => {
    const noteData = {
      noteId: this.state.demoNote[0].noteId,
      userId: defaultUID,
    };
    // console.log(noteData, "in on forwardTop");
    this.props.history.push(this.notePath(noteData));
  };

  onForwardBottom = () => {
    const noteData = {
      noteId: this.state.demoNote[1].noteId,
      userId: defaultUID,
    };
    // console.log(noteData, "in on forwardBtm");
    this.props.history.push(this.notePath(noteData));
  };

  onForwardProduct = () => {
    let productData = {
      noteId: this.state.demoProduct.productId,
      userId: defaultUID,
    };
    // console.log(productData, "in on forwardProduct");
    this.props.history.push(this.productPath(productData));
  };

  componentDidMount() {
    getExploreNote().then(this.handleNoteChange);
    getExploreProduct().then(this.handleProductChange);
  }

  componentDidUpdate(prevProps) {}

  render() {
    // console.log(this.state.noteData, "note in page");
    // console.log(this.state.productsData, "product in page");
    // console.log(this.state.demoNote, "demo in page");

    const backend = "http://localhost:8080";

    if (!this.state.demoProduct | !this.state.demoNote) {
      return <ExploreCard>Loading...</ExploreCard>;
    }

    const smlCards = this.state.demoNote.slice(2, 8);

    // console.log(smlCards, "sml demo in page");
    return (
      <ExploreCard>
        <MidCardsBox>
          <SmlTopCard onClick={this.onForwardTop}>
            <SmlCardImg src={`${backend}/${this.state.demoNote[0].imageUrl}`} />
          </SmlTopCard>
          <SmlBtmCard onClick={this.onForwardBottom}>
            <SmlCardImg src={`${backend}/${this.state.demoNote[1].imageUrl}`} />
          </SmlBtmCard>
          <LgCard onClick={this.onForwardProduct}>
            <LgCardImg
              src={`${backend}/${this.state.demoProduct.imageAddress}`}
            />
          </LgCard>
        </MidCardsBox>
        <SmlCardsBox>
          {smlCards.map((card) => (
            <SmlCard
              key={card.noteId}
              onClick={this.onForward.bind(this, card.noteId)}
            >
              <SmlCardImg src={`${backend}/${card.imageUrl}`} />
            </SmlCard>
          ))}
        </SmlCardsBox>
      </ExploreCard>
    );
  }
}

export default ExplorePage;
