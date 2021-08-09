import React from "react";
import styled from "styled-components";

const ProductMiniRating = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  // justify-content: center;
  justify-content: ${(props) => props.type};
  width: 70%;
`;

const StarsRatingNumber = styled.span`
  visibility: hidden;
  width: 70px;
  background-color: #ccc;
  color: #a86c6d;
  text-align: center;
  border-radius: 6px;
  padding: 1px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 82.5%;
  margin-left: -60px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 3px;
    border-style: solid;
    border-color: #ccc transparent transparent transparent;
  }
`;

const StarsOuter = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${StarsRatingNumber} {
    visibility: visible;
  }

  &::before {
    content: "\f005  \f005  \f005  \f005  \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #ccc;
  }
`;

const StarsInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => props.width};

  &::before {
    content: "\f005  \f005  \f005  \f005  \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #a86c6d;
  }
`;

class ProductRatingStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsTotal: 5,
      productRating: this.props.rating,
      width: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", this.getRating());
  }

  getRating() {
    const starPercentage =
      (this.state.productRating / this.state.starsTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // console.log(starPercentageRounded, "give me the star");
    this.setState({
      width: starPercentageRounded,
    });
  }

  render() {
    return (
      <ProductMiniRating type={this.props.type}>
        <StarsOuter>
          <StarsInner width={this.state.width} />
          <StarsRatingNumber>
            {this.state.productRating} Stars
          </StarsRatingNumber>
        </StarsOuter>
      </ProductMiniRating>
    );
  }
}

export default ProductRatingStar;
