import React from "react";
import styled from "styled-components";
import FlexBox from "../../../../components/Layout/FlexBox";

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
  border: solid 1px #a86c6d;
  position: relative;
`;

const SmlTopCard = styled.div`
  box-sizing: border-box;
  width: 310px;
  height: 310px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;
  border: solid 1px #a86c6d;
  position: relative;
  grid-area: smallTopCard;
`;

const SmlBtmCard = styled.div`
  box-sizing: border-box;
  width: 310px;
  height: 310px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;
  border: solid 1px #a86c6d;
  position: relative;
  grid-area: smallBottomCard;
`;

const LgCard = styled.div`
  box-sizing: border-box;
  width: 640px;
  height: 645px;
  padding: 0;
  margin: 10px;
  border-radius: 10px;
  border: solid 1px #a86c6d;
  position: relative;
  grid-area: largeCard;
`;

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteData: null,
      noteLikes: 0,
      noteCollects: 0,
      noteImages: null,
      likeActive: false,
      collectActive: false,
      commentData: null,
      likeUsersData: null,
      collectUsersData: null,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  render() {
    console.log(this.props, "noteid in page");
    console.log(this.props, "userid in page");

    return (
      <ExploreCard>
        <MidCardsBox>
          <SmlTopCard></SmlTopCard>
          <SmlBtmCard></SmlBtmCard>
          <LgCard></LgCard>
        </MidCardsBox>
        <SmlCardsBox>
          <SmlCard></SmlCard>
          <SmlCard></SmlCard>
          <SmlCard></SmlCard>
          <SmlCard></SmlCard>
          <SmlCard></SmlCard>
          <SmlCard></SmlCard>
        </SmlCardsBox>
      </ExploreCard>
    );
  }
}

export default ExplorePage;
