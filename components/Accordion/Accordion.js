import styled from "styled-components";
import React from "react";
import DescriptionLabel from "../TextLabel/components/DescriptionLabel";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemsTabOff from "./components/ItemsTabOff";
import ItemsTabOn from "./components/ItemsTabOn";
import ItemsTabArrow from "./components/ItemsTabArrow";
import DisplayContainer from "./components/DisplayContainer";
import productMiniImage1 from "../../media/product_img1_sml.png"
import ratingMiniImage from "../../media/rating_smp_sml.png"

const AccordionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: flex-start;

  padding: 0;
  margin: 0;

  width: 358px;
  height: 480px;
`;

const DescriptionContainer = styled(DisplayContainer)`
  border-radius: 5px;
  margin: 2px;
  border: solid 0.6px #c7c7c7;

  height: 350px;
`;


const ItemsContainer = styled(DisplayContainer)`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  flex-direction: column;
  justify-content: flex-start;

  margin: 0px 2px 2px 2px;
  padding: 10px 10px 0 10px;
  border-top: none;
  border-left: solid 0.6px #c7c7c7;
  border-right: solid 0.6px #c7c7c7;
  border-bottom: solid 0.6px #c7c7c7;

  height: 360px;

  overflow-y: scroll;
  overflow-x:hidden;
`;

const ProductCardMini = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  padding: 5px;
  width: 332px;

  border-radius: 5px;
  margin: 0 0 10px 0;
  border: solid 0.6px #c7c7c7;

  height: 106px;
`;

const ProductCardMiniLeftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px;
  width: 95px;
  margin: 0 0 0px 0;

  height: 95px;
`;

const ProductImageMini = styled.img`
  flex-grow: 0;
  margin: 0 auto;

  border-radius: 4px;
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  // &:hover{
  //     transform: translateZ(-2px);
  //     box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  // }
`;

const ProductCardMiniRightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  // padding: 6px 0px 6px 0px;
  width: 218px;
  padding: 0px;


  margin: 0 0 0px 0;
  height: 95px;

`;

const ProductMiniNameLabel = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55%;

  font-size: 0.9em;
  font-family: sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
`;

const ProductMiniBrandLabel = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 25%;

  font-size: 0.9em;
  font-family: sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
`;

const ProductMiniPriceContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 30%;

  font-size: 0.9em;
  font-family: sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
`;

const ProductMiniPriceLabel = styled.div`
  box-sizing: border-box;
  width: 30%;
  

  font-size: 1.2em;
  font-family: New Paris;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
`;

const ProductMiniRating = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  
`;

const ProductMiniRatingImg = styled.img`
  flex-grow: 0;
  margin: 0 auto;

  border-radius: 4px;
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  // &:hover{
  //     transform: translateZ(-2px);
  //     box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  // }
`;



const CommentsContainer = styled(DisplayContainer)`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  margin: 0px 2px 2px 2px;
  border-top: none;
  border-left: solid 0.6px #c7c7c7;
  border-right: solid 0.6px #c7c7c7;
  border-bottom: solid 0.6px #c7c7c7;

  height: 418px;
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemFirOn: false,
      itemSecOn: true,
      itemThdOn: false,
      data: null,
    };
  }

  handleTabTwoClick = () => {
    this.setState((state) => {
      return {
        itemFirOn: !state.itemFirOn,
        itemSecOn: !state.itemSecOn,
      };
    });
  };

  handleTabThreeDesOffClick = () => {
    this.setState((state) => {
      return {
        itemFirOn: !state.itemFirOn,
        itemThdOn: !state.itemThdOn,
      };
    });
  };

  handleTabThreeItmOffClick = () => {
    this.setState((state) => {
      return {
        itemSecOn: !state.itemSecOn,
        itemThdOn: !state.itemThdOn,
      };
    });
  };

  handleTabThreeOnClick = () => {
    this.setState((state) => {
      return {
        itemFirOn: !state.itemFirOn,
        itemThdOn: !state.itemThdOn,
      };
    });
  };

  render() {
    return (
      <AccordionContainer>
        {this.state.itemFirOn && (
          <div>
            <DescriptionContainer>
              <DescriptionLabel>{this.props.noteData.content}</DescriptionLabel>
            </DescriptionContainer>
            <ItemsTabOff onClick={this.handleTabTwoClick}>
              Linked Product
              <ItemsTabArrow>
                <FontAwesomeIcon icon={faChevronUp} />
              </ItemsTabArrow>
            </ItemsTabOff>
            <ItemsTabOff onClick={this.handleTabThreeDesOffClick}>
              View Comments
              <ItemsTabArrow>
                <FontAwesomeIcon icon={faChevronUp} />
              </ItemsTabArrow>
            </ItemsTabOff>
          </div>
        )}

        {this.state.itemSecOn && (
          <div>
            <ItemsTabOn onClick={this.handleTabTwoClick}>
              Linked Product
              <ItemsTabArrow>
                <FontAwesomeIcon icon={faChevronDown} />
              </ItemsTabArrow>
            </ItemsTabOn>
            <ItemsContainer>
              <ProductCardMini>
                <ProductCardMiniLeftContainer>
                  <ProductImageMini src = {productMiniImage1} />
                </ProductCardMiniLeftContainer>
                <ProductCardMiniRightContainer>
                  <ProductMiniNameLabel>香奈儿柔和净肤泡沫洁面乳</ProductMiniNameLabel>
                  <ProductMiniBrandLabel>香奈儿</ProductMiniBrandLabel>
                  <ProductMiniPriceContainer>
                    <ProductMiniPriceLabel>$22.5</ProductMiniPriceLabel>
                    <ProductMiniRating>
                      <ProductMiniRatingImg src = {ratingMiniImage} />
                    </ProductMiniRating>
                  </ProductMiniPriceContainer>
                </ProductCardMiniRightContainer>
              </ProductCardMini>
              <ProductCardMini>
                <ProductCardMiniLeftContainer>
                  <ProductImageMini src = {productMiniImage1} />
                </ProductCardMiniLeftContainer>
                <ProductCardMiniRightContainer>
                  <ProductMiniNameLabel>香奈儿柔和净肤泡沫洁面乳</ProductMiniNameLabel>
                  <ProductMiniBrandLabel>香奈儿</ProductMiniBrandLabel>
                  <ProductMiniPriceContainer>
                    <ProductMiniPriceLabel>$22.5</ProductMiniPriceLabel>
                    <ProductMiniRating>
                      <ProductMiniRatingImg src = {ratingMiniImage} />
                    </ProductMiniRating>
                  </ProductMiniPriceContainer>
                </ProductCardMiniRightContainer>
              </ProductCardMini>
              <ProductCardMini>
                <ProductCardMiniLeftContainer>
                  <ProductImageMini src = {productMiniImage1} />
                </ProductCardMiniLeftContainer>
                <ProductCardMiniRightContainer>
                  <ProductMiniNameLabel>香奈儿柔和净肤泡沫洁面乳</ProductMiniNameLabel>
                  <ProductMiniBrandLabel>香奈儿</ProductMiniBrandLabel>
                  <ProductMiniPriceContainer>
                    <ProductMiniPriceLabel>$22.5</ProductMiniPriceLabel>
                    <ProductMiniRating>
                      <ProductMiniRatingImg src = {ratingMiniImage} />
                    </ProductMiniRating>
                  </ProductMiniPriceContainer>
                </ProductCardMiniRightContainer>
              </ProductCardMini>
              <ProductCardMini>
                <ProductCardMiniLeftContainer>
                  <ProductImageMini src = {productMiniImage1} />
                </ProductCardMiniLeftContainer>
                <ProductCardMiniRightContainer>
                  <ProductMiniNameLabel>香奈儿柔和净肤泡沫洁面乳</ProductMiniNameLabel>
                  <ProductMiniBrandLabel>香奈儿</ProductMiniBrandLabel>
                  <ProductMiniPriceContainer>
                    <ProductMiniPriceLabel>$22.5</ProductMiniPriceLabel>
                    <ProductMiniRating>
                      <ProductMiniRatingImg src = {ratingMiniImage} />
                    </ProductMiniRating>
                  </ProductMiniPriceContainer>
                </ProductCardMiniRightContainer>
              </ProductCardMini>
            </ItemsContainer>
            <ItemsTabOff onClick={this.handleTabThreeItmOffClick}>
              View Comments
              <ItemsTabArrow>
                <FontAwesomeIcon icon={faChevronUp} />
              </ItemsTabArrow>
            </ItemsTabOff>
          </div>
        )}

        {this.state.itemThdOn && (
          <div>
            <ItemsTabOn onClick={this.handleTabThreeOnClick}>
              View Comments
              <ItemsTabArrow>
                <FontAwesomeIcon icon={faChevronDown} />
              </ItemsTabArrow>
            </ItemsTabOn>
            <CommentsContainer></CommentsContainer>
          </div>
        )}
      </AccordionContainer>
    );
  }
}

export default Accordion;
