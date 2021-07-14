import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import NavbarItem from './components/NavbarItem';
import logoImage from '../../build/static/media/logo.png';
import explorerImage from '../../build/static/media/home_icon.png';
import likeImage from '../../build/static/media/like_icon.png';
import collectImage from '../../build/static/media/collection_icon.png';
import createImage from '../../build/static/media/createnote_icon.png';
import accountImage from '../../build/static/media/Account_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';


const Logo = styled.img`
    width: 88px;
    height: 44px;
    flex-grow: 0;
    margin: 0 0 0 0; 

    border-radius: 4px;
    transition-property: transform, box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:hover{
        transform: translateZ(-2px);
        box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
    }
`;

const Nav = styled(Flex)`
    margin: 0;
    padding: 5.9px 58.5px 6.1px 59px;
    background-color: #f4ded7;
    box-shadow: 0 0 60px rgb(70 70 70 / 12%);
`;

const NavInternal = styled(Flex)`
    margin: 0 auto;
    width: 1000px;
    justify-content:space-between;
`;

const RightItem = styled.img`
    width: 18px;
    height: 18px;
    flex-grow: 0;
    margin: 0 15px 0 0; 

    border-radius: 4px;
   
    transition-property: transform, box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:hover{
        transform: translateY(-8px);
        box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
    }   
`;

const Left = styled.div`
    width:200 px;
`;

const Middle = styled(Flex)`
    margin: 0 0 0 80px; 
`;

const CategoryButton = styled.button`
    width: 30px;
    font-size: 1em;
    margin: 0;
    padding: 0;
    border: none; 
    color: white;
    background-color: #f4ded7; 

    &:hover{
        transform: translateZ(-2px);=
        transition: width 0.3s ease-in-out;
    }
    
    &:active {
        color: black;
    }


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

const Right = styled.div`
    min-width: 160px;
`;

const RightItems = styled(Flex)`
    margin: 0;
`;

const Header = () => (
    <Nav>
        <NavInternal>
        <Left>
            <Logo src={logoImage} />
        </Left>
        <Middle>
            <CategoryButton>
                <FontAwesomeIcon icon={faCompass} />
            </CategoryButton>
            <SearchArea>
                <SearchInput defaultValue = "Search" type = "text" inputColor = "black" />
            </SearchArea>
        </Middle>
        <Right>
            <RightItems>
                <RightItem src={explorerImage} href="EXPLORER" />
                <RightItem src={createImage} href="CREATE" />
                <RightItem src={collectImage} href="COLLECT" />
                <RightItem src={likeImage} href="LIKE" />
                <RightItem src={accountImage} href="ACCOUNT" />
            </RightItems>
        </Right>
        </NavInternal>
  </Nav>
);

export default Header;