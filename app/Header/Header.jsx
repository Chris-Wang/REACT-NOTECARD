import React from "react";
import styled from "styled-components";
import HeaderDiv from "../../components/Layout/HeaderLayout/HeaderDiv";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

const HeadBar = styled(HeaderDiv)`
  min-width: 1016px;
  padding: 5.9px 0px 6.1px 0px;
  box-shadow: 0 0 60px rgb(70 70 70 / 12%);
`;

const HeadBarContainer = styled(HeaderDiv)`
  margin: 0 auto;
  width: 1000px;
  justify-content: space-between;
`;

const LeftContainer = styled(HeaderDiv)`
  width: 200 px;
`;

const MiddleContainer = styled(HeaderDiv)`
  margin: 0 0 0 80px;
`;

const RightContainer = styled(HeaderDiv)`
  width: 260px;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 330px;
  height: 26px;
  flex-grow: 0;
  margin: 0 0 0 6px;
  padding: 0;
  border-radius: 10.5px;
  background-color: #ffffff;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  render() {
    const { handeleIdChange } = this.props;

    return (
      <HeadBar>
        <HeadBarContainer>
          <LeftContainer>
            <Button type={"HEADERLOGO"} />
          </LeftContainer>
          <MiddleContainer>
            <Button type={"CATEGORY"} />
            <SearchContainer>
              <InputBox updateId={handeleIdChange} type={"SEARCH"} />
            </SearchContainer>
          </MiddleContainer>
          <RightContainer>
            <Button type={"HOME"} />
            <Button type={"CREATENOTE"} />
            <Button type={"LIKEHISTORY"} />
            <Button type={"COLLECTEDNOTE"} />
            <Button type={"USERPROFILE"} />
          </RightContainer>
        </HeadBarContainer>
      </HeadBar>
    );
  }
}

export default Header;
