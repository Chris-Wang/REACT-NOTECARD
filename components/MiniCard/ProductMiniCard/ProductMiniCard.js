import styled from "styled-components";
import React from "react";
import productMiniImage1 from "../../../media/product_img1_sml.png";
import ratingMiniImage from "../../../media/rating_smp_sml.png";

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
  word-wrap:break-word;
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
  word-wrap:break-word;
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

class ProductMiniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.map((product) => (
          <ProductCardMini key={product.productId}>
            <ProductCardMiniLeftContainer>
              <ProductImageMini src={productMiniImage1} />
            </ProductCardMiniLeftContainer>
            <ProductCardMiniRightContainer>
              <ProductMiniNameLabel>{product.productName}</ProductMiniNameLabel>
              <ProductMiniBrandLabel>Artimes</ProductMiniBrandLabel>
              <ProductMiniPriceContainer>
                <ProductMiniPriceLabel>
                  ${product.productPrice}
                </ProductMiniPriceLabel>
                <ProductMiniRating>
                  <ProductMiniRatingImg src={ratingMiniImage} />
                </ProductMiniRating>
              </ProductMiniPriceContainer>
            </ProductCardMiniRightContainer>
          </ProductCardMini>
        ))}
      </div>
    );
  }
}

export default ProductMiniCard;
