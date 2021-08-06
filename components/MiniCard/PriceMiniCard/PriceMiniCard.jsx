import styled from "styled-components";
import React from "react";
import { withRouter } from "react-router-dom";

const PriceListCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 2px;
  width: 332px;
  border-radius: 5px;
  margin: 0 0 10px 0;
  border: solid 0.6px #c7c7c7;
  text-align: center;  
  height: 70px;
`;

const ProductPriceMini = styled.div`
  box-sizing: border-box;
  width: 30px;
  padding: 3px;
  margin: 10px 0px 0px 5px;
  height: 30px;
  justify-content: center;
  font-family: Prata;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 44px;
  color: #565561;
  text-align: center;  
`;

const ProductMiniRetailerNameLabel = styled.div`
  box-sizing: border-box;
  width: 150px;
  padding: 3px;
  margin: 10px 0px 0px 10px;
  height: 15px;
  justify-content: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  color: #565561;
  text-align: center;
`;

const ProductMiniRetailerNameBold = styled.div`
  box-sizing: border-box;
  width: 150px;
  padding: 3px;
  margin: 0px 0px 0px 13px;
  height: 15px;
  justify-content: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #565561;
  text-align: center;
`;

const ProductMiniLinkLabel = styled.a`
  box-sizing: border-box;
  width: 80px;
  padding: 0.5px 2px 2px 0.5px;
  margin: 20px 15px 10px 0px;
  height: 25px;
  font-size: 0.8em;
  font-family: sans-serif;
  font-weight: 350;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
  background: #A86C6D;
  text-decoration: none;
  border-radius: 3px;
`;

const defaultUID = "16a0b5a3-d732-47ed-b9aa-6a5fa31931e2";
class PriceMiniCard extends React.Component {
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
      noteId: pId,
      userId: defaultUID,
    };
    this.props.history.push(this.productPath(productData));
  };
  render() {
    const { products } = this.props;
    const backend = "http://localhost:8080";
    if (!products) {
      return "Loading...";
    }
    return (
      <>
        {products.map((product) => (
          <PriceListCard key={product.id}>
            <ProductPriceMini>${product.prices}</ProductPriceMini>
            <ProductMiniRetailerNameLabel>
              From <ProductMiniRetailerNameBold>{product.retailersName}</ProductMiniRetailerNameBold>
            </ProductMiniRetailerNameLabel>
            <ProductMiniLinkLabel href={product.retailersWebSites} title="Shop Now!">
              Go to store
            </ProductMiniLinkLabel>
          </PriceListCard>
        ))}
      </>
    );
  }
}

export default withRouter(PriceMiniCard);
