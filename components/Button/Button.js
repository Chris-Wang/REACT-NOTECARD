import React from "react";

import styled from "styled-components";

import CategoryBtn from "./components/CategoryBtn";
import HeaderLogoBtn from "./components/HeaderLogoBtn";
import HeaderBtn from "./components/HeaderBtn";
import HeaderLastBtn from "./components/HeaderLastBtn";
import NoteFollowBtn from "./components/NoteFollowBtn";
import NoteForwardBtn from "./components/NoteForwardBtn";
import NoteFunctionBtn from "./components/NoteFunctionBtn";
import NoteNumsBtn from "./components/NoteNumsBtn";

import HeaderLogo from "../Image/HeaderLogo";
import logoImage from '../Image/HeaderLogo/logo.png';

import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlexBox from "../Layout/FlexBox";


const ListCardLeftContainer = styled(FlexBox)`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    background-color: #ffffff;
    bottom: 125px;
    right: 100px;

    padding: 12px;
    margin: 2px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #a86c6d;

    width: 280px;
    height: 300px;
`

const ListCardRightContainer = styled(FlexBox)`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    background-color: #ffffff;
    bottom: 125px;
    right: 30px;

    padding: 12px;
    margin: 2px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #a86c6d;

    width: 280px;
    height: 300px;
`

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seen: false,
      };
      this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    
    handleButtonClick = () => {
        this.setState((state) => {
          return {
            seen: !state.seen,
          };
        });
    };
    
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
      
    handleClickOutside = (event) => {
        // if (
        //   this.container.current &&
        //   !this.container.current.contains(event.target)
        // ) {
          this.setState({
        //   seen: false,
          });
        }


    renderButton( type ) {
        switch ( type ) {

      
        case "CATEGORY":
            return (
                <CategoryBtn>
                    <FontAwesomeIcon icon={faCompass} />
                </CategoryBtn>
            );

        case "HEADERLOGO":
            return (
                <HeaderLogoBtn>
                    <HeaderLogo  src={logoImage}/>
                </HeaderLogoBtn>
            );

        case "HOME":
            return (
                <HeaderBtn>
                    <FontAwesomeIcon icon={faHouseUser} />
                </HeaderBtn>
            );
        
        case "CREATENOTE":
            return (
                <HeaderBtn>
                    <FontAwesomeIcon icon={faPen} />
                </HeaderBtn>
            );

        case "COLLECTEDNOTE":
            return (
                <HeaderBtn>
                    <FontAwesomeIcon icon={faBook} />
                </HeaderBtn>
            );

        case "LIKEHISTORY":
            return (
                <HeaderBtn>
                    <FontAwesomeIcon icon={faHeart} />
                </HeaderBtn>
            );

        case "USERPROFILE":
            return (
                <HeaderLastBtn>
                    <FontAwesomeIcon icon={faUserAlt} />
                </HeaderLastBtn>
            );

        case "AUTHORFOLLOW":
            return (
                <NoteFollowBtn>
                    Follow
                </NoteFollowBtn>
            );

        case "LIKENOTE":
            return (
                <NoteFunctionBtn>
                    <FontAwesomeIcon icon={faHeart} />
                </NoteFunctionBtn>
            );        
        
        case "LIKENOTEUSERS":
            return (
                <NoteNumsBtn onClick={this.handleButtonClick}>
                        {this.props.number}
                </NoteNumsBtn>
            );

        case "COLLECTNOTE":
            return (
                <NoteFunctionBtn>
                    <FontAwesomeIcon icon={faBookmark} />
                </NoteFunctionBtn>
            );

        case "COLLECTNOTEUSERS":
            return (
                <NoteNumsBtn onClick={this.handleButtonClick}>
                        {this.props.number}
                </NoteNumsBtn>
            );

        case "FORWARDNOTE":
            return (
                <NoteForwardBtn>
                    <FontAwesomeIcon icon={faReply} />
                </NoteForwardBtn>
            );
        } 
    }

    render() {
        return (
          <div>{this.renderButton(this.props.type)}
          {this.state.seen && this.props.type === 'LIKENOTEUSERS' &&(
            <ListCardLeftContainer></ListCardLeftContainer>
          )}
          {this.state.seen && this.props.type === 'COLLECTNOTEUSERS' &&(
            <ListCardRightContainer></ListCardRightContainer>
          )}
          </div>
        );
    }
}

export default Button;