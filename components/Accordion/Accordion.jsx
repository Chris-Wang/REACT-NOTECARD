import styled from "styled-components";
import React from "react";
import DescriptionLabel from "../TextLabel/components/DescriptionLabel";
import LowestPriceLabel from "../TextLabel/components/LowestPriceLabel";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemsTabOff from "./components/ItemsTabOff";
import ItemsTabOn from "./components/ItemsTabOn";
import ItemsTabArrow from "./components/ItemsTabArrow";
import DisplayContainer from "./components/DisplayContainer";
import TabDisplayContainer from "./components/TabDisplayContainer";

import getProductMini from "../../apis/getProductMini";
import getCommentMini from "../../apis/getCommentMini";
import ProductMiniCard from "../MiniCard/ProductMiniCard";
import CommentMiniCard from "../MiniCard/CommentMiniCard";
import getPrice from "../../apis/getPrice";

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

const PriceContainer = styled(DisplayContainer)`
  border-radius: 5px;
  margin: 2px;
  align-items: center;

  height: 50px;
`;

const ProductInfoContainer = styled(DisplayContainer)`
  border-radius: 5px;
  margin: 2px;
  border: solid 0.6px #c7c7c7;

  height: 300px;
`;

const DescriptionContainer = styled(DisplayContainer)`
  border-radius: 5px;
  margin: 2px;
  border: solid 0.6px #c7c7c7;

  height: 350px;
`;

const ItemsContainer = styled(TabDisplayContainer)`
  flex-direction: column;
  justify-content: flex-start;

  margin: 0px 2px 2px 2px;
  padding: 10px 10px 0 10px;

  height: 360px;
`;

const CommentsContainer = styled(TabDisplayContainer)`
  flex-direction: column;
  justify-content: flex-start;

  margin: 0px 2px 2px 2px;
  padding: 10px 6px 0 10px;

  height: 418px;
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemFirOn: true,
      itemSecOn: false,
      itemThdOn: false,
      productData: null,
      commentData: null,
      productPrice: null,
    };

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    //this.handleCommentsChange = this.handleCommentsChange.bind(this);
  }

  handleTabTwoClick = () => {
    this.setState((state) => {
      return {
        itemFirOn: !state.itemFirOn,
        itemSecOn: !state.itemSecOn,
      };
    });
  };

  handleProductChange(newProduct) {
    this.setState({
      productData: newProduct,
    });
  }

  handlePriceChange(newPrice) {
    this.setState({
      productPrice: newPrice,
    });
  }

  // handleCommentsChange(newComments) {
  //   this.setState({
  //     commentData: newComments,
  //   });
  // }

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

  renderAccordion(type) {
    switch (type) {
      case "NOTE":
        return (
          <>
            {this.state.itemFirOn && (
              <>
                <DescriptionContainer>
                  <DescriptionLabel>
                    {this.props.noteData.content}
                  </DescriptionLabel>
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
              </>
            )}
            {this.state.itemSecOn && (
              <>
                <ItemsTabOn onClick={this.handleTabTwoClick}>
                  Linked Product
                  <ItemsTabArrow>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </ItemsTabArrow>
                </ItemsTabOn>
                <ItemsContainer>
                  <ProductMiniCard
                    type={"NOTE"}
                    products={this.state.productData}
                  />
                </ItemsContainer>
                <ItemsTabOff onClick={this.handleTabThreeItmOffClick}>
                  View Comments
                  <ItemsTabArrow>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </ItemsTabArrow>
                </ItemsTabOff>
              </>
            )}
            {this.state.itemThdOn && (
              <>
                <ItemsTabOn onClick={this.handleTabThreeOnClick}>
                  View Comments
                  <ItemsTabArrow>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </ItemsTabArrow>
                </ItemsTabOn>
                <CommentsContainer>
                  <CommentMiniCard
                    type={"NOTE"}
                    comments={this.props.commentData}
                  />
                </CommentsContainer>
              </>
            )}
          </>
        );

      case "PRODUCT":
        return (
          <>
            {this.state.itemFirOn && (
              <>
                <PriceContainer>
                  <LowestPriceLabel>
                    ${this.props.productData.lowestPrice}
                  </LowestPriceLabel>
                </PriceContainer>
                <ProductInfoContainer>
                  {this.props.productData.description}
                </ProductInfoContainer>
                <ItemsTabOff onClick={this.handleTabTwoClick}>
                  Compare Price from Retailers
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
              </>
            )}
            {this.state.itemSecOn && (
              <>
                <ItemsTabOn onClick={this.handleTabTwoClick}>
                  Compare Price from Retailers
                  <ItemsTabArrow>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </ItemsTabArrow>
                </ItemsTabOn>
                <ItemsContainer>
                  <ProductMiniCard
                    type={"PRODUCT"}
                    products={this.state.productPrice}
                  />
                </ItemsContainer>
                <ItemsTabOff onClick={this.handleTabThreeItmOffClick}>
                  View Comments
                  <ItemsTabArrow>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </ItemsTabArrow>
                </ItemsTabOff>
              </>
            )}
            {this.state.itemThdOn && (
              <>
                <ItemsTabOn onClick={this.handleTabThreeOnClick}>
                  View Comments
                  <ItemsTabArrow>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </ItemsTabArrow>
                </ItemsTabOn>
                <CommentsContainer>
                  <CommentMiniCard
                    type={"PRODUCT"}
                    comments={this.props.commentData}
                  />
                </CommentsContainer>
              </>
            )}
          </>
        );
    }
  }

  componentDidMount() {
    getProductMini(this.props.noteData.noteId).then(this.handleProductChange);
    getPrice(this.props.noteData.noteId).then(this.handlePriceChange);
    //getProductComment(this.props.noteData.noteId).then(this.handleCommentsChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteData.noteId !== this.props.noteData.noteId) {
      getProductMini(this.props.noteData.noteId).then(this.handleProductChange);
      getPrice(this.props.noteData.noteId).then(this.handlePriceChange);
      //getProductComment(this.props.noteData.noteId).then(this.handleCommentsChange);
    }
  }

  render() {
    //const { productData } = this.state;
    return (
      <AccordionContainer>
        {this.renderAccordion(this.props.type)}
      </AccordionContainer>
    );
  }
}

export default Accordion;
