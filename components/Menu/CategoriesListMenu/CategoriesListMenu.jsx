import styled from "styled-components";
import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import { Route, Link } from "react-router-dom";


const Items = styled.div`
  position:relative;
  height: 39px;
  width: 277px;
  border-radius: 10px;
  border: 1px solid #F4DED7;
  box-sizing:border-box;
  margin:5px;
  text-align: center;
  line-height: 39px;

  &:hover {
    border: solid 1px #a86c6d;
  }

`;

const Container = styled(HeaderMenu)`
  height: 301px;
  width: 307px;
  left: 353px;
  top: 52px;
  border-radius: 20px;
  background: #FFFFFF;
  border: 1px solid #A86C6D;
  box-shadow: 0px 2px 8px 0px #00000040;
  z-index: 100;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;
    &:hover{
      color: #A86C6D;
    }
`;


class CategoriesListMenu extends React.Component {

  render() {

    return (
      <>
        <Container>
          <StyledLink to="/productsList/1">
            <Items>Cleaning</Items>
          </StyledLink>
          <StyledLink to="/productsList/2">
            <Items>Moisturizing</Items>
          </StyledLink>
          <StyledLink to="/productsList/3">
            <Items>Whitening</Items>
          </StyledLink>
          <StyledLink to="/productsList/4">
            <Items>Perfume</Items>
          </StyledLink>
          <StyledLink to="/productsList/5">
            <Items>Lipstick</Items>
          </StyledLink>
        </Container>
      </>
    );
  }
}

export default CategoriesListMenu;
