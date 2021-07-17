import styled from "styled-components";
import React from "react";
import FlexBox from "../Layout/FlexBox";

const DisplayedAccordion = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: flex-start;

  padding: 0;
  margin: 0;
  //border: solid 0.5px #a86c6d;

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

const DescriptionLabel = styled.div`
  position: relative;
  box-sizing: border-box;

  //border: solid 0.5px #a86c6d;

  width: 100%;

  font-size: 0.9em;
  font-family: sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
`;

const ItemsTabOff = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f4ded7;

  padding: 12px;
  margin: 10px 2px 0px 2px;

  width: 352px;
  height: 50px;

  font-size: 1.1em;
  font-family: "Segoe UI", sans-serif;
`;

const ItemsTabOn = styled.div`
  position: relative;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #f4ded7;

  padding: 12px;
  margin: 2px 2px 0px 2px;

  width: 352px;
  height: 50px;

  font-size: 1.1em;
  font-family: "Segoe UI", sans-serif;
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
  height: 420px;
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
      <DisplayedAccordion>
        {this.state.itemFirOn && (
          <div>
            <DescriptionContainer>
              <DescriptionLabel>{this.props.noteData.content}</DescriptionLabel>
            </DescriptionContainer>
            <ItemsTabOff onClick={this.handleTabTwoClick}>
              Linked Product
            </ItemsTabOff>
            <ItemsTabOff onClick={this.handleTabThreeDesOffClick}>
              View Comments
            </ItemsTabOff>
          </div>
        )}

        {this.state.itemSecOn && (
          <div>
            <ItemsTabOn onClick={this.handleTabTwoClick}>
              Linked Product
            </ItemsTabOn>
            <ItemsContainer></ItemsContainer>
            <ItemsTabOff onClick={this.handleTabThreeItmOffClick}>
              View Comments
            </ItemsTabOff>
          </div>
        )}

        {this.state.itemThdOn && (
          <div>
            <ItemsTabOn onClick={this.handleTabThreeOnClick}>
              View Comments
            </ItemsTabOn>
            <CommentsContainer></CommentsContainer>
          </div>
        )}
      </DisplayedAccordion>
    );
  }
}

export default Accordion;
