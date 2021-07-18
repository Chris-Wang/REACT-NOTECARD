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

import getProductMini from "../../apis/getProductMini/getProductMini";
import ProductMiniCard from "../MiniCard/ProductMiniCard";

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
      itemFirOn: true,
      itemSecOn: false,
      itemThdOn: false,
      data: null,
      productData: null,
    };

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
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

  handleDataChange(newNote) {
    this.setState({
      data: newNote,
    });
  }

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

  componentDidMount() {
    getProductMini(this.props.noteData.noteId).then(this.handleProductChange);
  }

  render() {

    const {productData} = this.state;

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
              <ProductMiniCard products = {productData}>
              </ProductMiniCard>
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
