import React from "react";

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



class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seen: false,
      };
      this.togglePop = this.togglePop.bind(this);
    }
    togglePop() {
      this.setState({
        seen: !this.state.seen,
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
                <NoteNumsBtn>
                        21
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
                <NoteNumsBtn>
                        32
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
          <div>{this.renderButton(this.props.type)}</div>
        );
    }
}

export default Button;