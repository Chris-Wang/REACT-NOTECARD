import styled from "styled-components";
import React from "react";
import ProductCardMini from "./components/ProductCardMini";
import ProductRatingStar from "./components/ProductRatingStar";
import { withRouter } from "react-router-dom";

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
  width: 95px;
  object-fit: cover;

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
  word-wrap: break-word;
  overflow-y: scroll;
  overflow-x: hidden;
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
  word-wrap: break-word;
`;

const ProductMiniPriceContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 26%;

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

// const defaultUID = "16a0b5a3-d732-47ed-b9aa-6a5fa31931e2";
class ProductMiniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  productPath = (productData) => {
    return {
      pathname: "/products",
      state: productData,
    };
  };

  onForward = (pId) => {
    const productData = {
      productId: pId,
      userId: this.props.userId,
    };
    // console.log(productData, "in on forward");
    this.props.history.push(this.productPath(productData));
  };

  render() {
    const { products } = this.props;
    const backend = "http://localhost:8080";
    if (!products) {
      return "Loading...";
    }

    return (
      <div>
        {products.map((product) => (
          <ProductCardMini
            key={product.productId}
            onClick={this.onForward.bind(this, product.productId)}
          >
            <ProductCardMiniLeftContainer>
              <ProductImageMini src={`${backend}/${product.imageAddress}`} />
            </ProductCardMiniLeftContainer>
            <ProductCardMiniRightContainer>
              <ProductMiniNameLabel>{product.productName}</ProductMiniNameLabel>
              <ProductMiniBrandLabel>
                {product.productBrands}
              </ProductMiniBrandLabel>
              <ProductMiniPriceContainer>
                <ProductMiniPriceLabel>
                  ${product.productPrice}
                </ProductMiniPriceLabel>
                <ProductRatingStar type={"center"} rating={product.rating} />
              </ProductMiniPriceContainer>
            </ProductCardMiniRightContainer>
          </ProductCardMini>
        ))}
      </div>
    );
  }
}

export default withRouter(ProductMiniCard);
