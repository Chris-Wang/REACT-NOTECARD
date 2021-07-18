import styled from "styled-components";
import React from "react";
import DescriptionLabel from "../TextLabel/components/DescriptionLabel";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemsTabOff from "./components/ItemsTabOff";
import ItemsTabOn from "./components/ItemsTabOn";
import ItemsTabArrow from "./components/ItemsTabArrow";

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

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 5px;

  padding: 12px;
  margin: 2px;
  border: solid 0.6px #c7c7c7;

  width: 352px;
  height: 350px;
`;


const ItemsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  padding: 12px;
  margin: 0px 2px 2px 2px;
  border-top: none;
  border-left: solid 0.6px #c7c7c7;
  border-right: solid 0.6px #c7c7c7;
  border-bottom: solid 0.6px #c7c7c7;

  width: 352px;
  height: 360px;
`;

const CommentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  padding: 12px;
  margin: 0px 2px 2px 2px;
  border-top: none;
  border-left: solid 0.6px #c7c7c7;
  border-right: solid 0.6px #c7c7c7;
  border-bottom: solid 0.6px #c7c7c7;

  width: 352px;
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
            <ItemsContainer></ItemsContainer>
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
