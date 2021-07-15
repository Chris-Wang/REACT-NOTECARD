import React from 'react';
import styled from 'styled-components';
import HeaderDiv from '../../components/Layout/HeaderLayout/HeaderDiv';
import Button from '../../components/Button';

const HeadBar = styled(HeaderDiv)`
    padding: 5.9px 58.5px 6.1px 59px;
    box-shadow: 0 0 60px rgb(70 70 70 / 12%);
`;

const HeadBarContainer = styled(HeaderDiv)`
    margin: 0 auto;
    width: 1008px;
    justify-content:space-between;

`;

const LeftContainer = styled(HeaderDiv)`
    width:200 px;
`;

const MiddleContainer = styled(HeaderDiv)`
    margin: 0 0 0 80px;
`;

const RightContainer = styled(HeaderDiv)`
    width: 260px;
    justify-content: flex-end;
`;


const SearchArea = styled.div`
    width: 330px;
    height: 26px;
    flex-grow: 0;
    margin: 0 0 0 6px;
    padding: 0;
    // margin: 4.6px 12px 4.9px 13.5px;
    // padding: 5px 9.5px 4px 8.5px;
    border-radius: 10.5px;
    background-color: #ffffff;
`;

const SearchInput = styled.input`
    padding: 0;
    margin: 5px 3px 3px 15px;
    outline: none;
    color: ${props => props.inputColor || "black"};
    background-color: #ffffff;
    border: none;
    border-radius: 3px;
`;



const Header = () => (
  <HeadBar>
      <HeadBarContainer>
        <LeftContainer>
          <Button type={"HEADERLOGO"} />
        </LeftContainer>
        <MiddleContainer>
          <Button type={"CATEGORY"} />
          <SearchArea>
            <SearchInput defaultValue = "Search" type = "text" inputColor = "black" />
          </SearchArea>
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

export default Header;