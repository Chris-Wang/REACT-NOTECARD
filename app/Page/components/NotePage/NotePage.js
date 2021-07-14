import React from 'react';
import styled from 'styled-components';
import productImage from '../../../../build/static/media/product_image.png';
import avatarImage from '../../../../build/static/media/user_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const NoteCard = styled.div`
    //display: block;
    //background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    position: relative;
    // width: 617.5px;
    // height: 441px;
    width: 1000px;
    
    margin:0 auto;
    padding: 3px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #a86c6d;
`;

const CardLeft = styled.div`
    display: block;
    position: relative;
    // width: 617.5px;
    // height: 441px;
    min-height: 700px;
    width: 100%;
    margin: 0;
    padding: 0; 
    //border: solid 0.5px #a86c6d;
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;

    padding-left: 25px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 0;

`;

const ImageLoader = styled.img`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;

    border-radius: 10px;
    height: 655px;
    width: 560px;
   
`;

const CardRight = styled.div`
    display: block;
    position: relative;
    // width: 617.5px;
    // height: 441px;
    
    min-height: 700px;
    width: 100%;
    margin:0 auto;
  
    //border: solid 0.5px #a86c6d;
`;

const RightContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    padding-left: 15px;
    padding-right: 25px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 0;

`;

const AuthorRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;

    padding: 0;
    margin: 0;

    width: 358px;
    height: 80px;

`;

const AuthorAvatar = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 0;

    width: 80px;
    height: 80px;

`;

const AuthorAvatarLoader = styled.img`
    position: relative;
    box-sizing: border-box;
    margin: 0;

    border-radius: 35px;
    width: 65px;
    height: 65px;

`;

const AuthorName = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 5px;
    padding-right: 5px;
    margin: 0;
    
    width: 170px;
    height: 80px;

`;

const AuthorNameLabel = styled.div`
    position: relative;
    box-sizing: border-box;

    padding: 0;
    margin: 0;

    width: 160px;
    height: 36px;

    font-size: 1.4em;
    font-family: New Paris;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.18px;
    text-align: center;
    color: black;

`;

const AuthorButtonArea = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    margin: 0;

    width: 100px;
    height: 80px;

`;

const AuthorButton = styled.button`
    width: 80px;
    height: 20px;
    font-size: 0.75em;
    margin: 0;
    padding: 0;
    color: white;
    background-color: #a86c6d; 
    border: none; 

    font-family: sans-serif;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    text-align: center;

    &:hover{
        transform: translateZ(-2px);=
        transition: width 0.3s ease-in-out;
    }
    
    &:active {
        color: black;
    }


`;

const DisplayedAccordion  = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    padding: 0;
    margin: 0;
    //border: solid 0.5px #a86c6d;

    width: 358px;
    height: 480px;
`;

const DescriptionContainer  = styled.div`
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

const DescriptionLabel  = styled.div`
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

const LinkedProductContainer  = styled.div`
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #f4ded7;

    padding: 12px;
    margin: 10px 2px 0px 2px;
    //border: solid 0.5px #a86c6d;

    width: 352px;
    height: 50px;

    font-size: 1.1em;
    font-family: "Segoe UI";
    font-weight: 600;
`;

const ViewCommentsContainer  = styled.div`
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #f4ded7;

    padding: 12px;
    margin: 10px 2px 10px 2px;
    //border: solid 0.5px #a86c6d;

    width: 352px;
    height: 50px;


    font-size: 1.1em;
    font-family: "Segoe UI";
    font-weight: 600;
`;

const FunctionSet = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    box-sizing: border-box;

    padding: 0;
    margin: 0;
    //border: solid 0.5px #a86c6d;

    width: 358px;
    height: 50px;
`;

const LikeButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 30px;
    margin: 0;
    padding: 0;
    border: none; 
    color: #c7c7c7;
    background-color: white; 

    &:hover{
        transform: translateZ(-2px);=
        transition: width 0.3s ease-in-out;
    }

    &:active {
        color: #a86c6d;
    }


`;

const LikeNumber = styled.span`
    position: relative;
    box-sizing: border-box;

    padding: 10px 20px 10px 0px;
    margin: 0;
    //border: solid 0.5px #a86c6d;

    width: 40px;
    height: 50px;

    font-size: 1em;
    font-family: "Segoe UI";
    font-weight: 600;
`;

const CollectButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 30px;
    margin: 0;
    padding: 0;
    border: none; 
    color:  #c7c7c7;
    background-color: white; 

    &:hover{
        transform: translateZ(-2px);=
        transition: width 0.3s ease-in-out;
    }

    &:active {
        color: #a86c6d;
    }

`;

const CollectNumber = styled.span`
    position: relative;
    box-sizing: border-box;

    padding: 10px 20px 10px 0px;
    margin: 0;
    //border: solid 0.5px #a86c6d;

    width: 40px;
    height: 50px;

    font-size: 1em;
    font-family: "Segoe UI";
    font-weight: 600;
`;

const ForwardButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 30px;
    margin: 0 0 0 110px;
    padding: 0;
    border: none; 
    color: #c7c7c7;
    background-color: white; 
 

    &:hover{
        transform: translateZ(-2px);=
        transition: width 0.3s ease-in-out;
    }

    &:active {
        color: #a86c6d;
    }
`;


const QuickCommentContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    box-sizing: border-box;

    border: solid 0.5px #c7c7c7;

    width: 352px;
    height: 50px;

    padding: 10px;
    margin: 0 px 2px 0px 2px;

`;

const CommentInput = styled.input`
    padding: 0;
    margin: 0;
    outline: none;
    color: ${props => props.inputColor || "black"};
    background-color: #ffffff;
    border: none;
    border-radius: 3px;

    width: 350px;

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

let likeNum = '11';
let collectNum = '15';
let isLiked = false;
let isCollected = false;

//state：
//images,
//props

const Sydney = '2147714';

const getCurrentLikeNum = (handleLikeChange) => {
   
    const xhttp = new XMLHttpRequest();
    const basePath = 'https://api.openweathermap.org/data/2.5/';
    const units = 'metric';
    const appid = '2466213f21b4b723d341e00a430a7673';
    const url = `${basePath}/weather?id=${Sydney}&units=${units}&appid=${appid}`;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.responseText);
           // console.log(data);
           handleLikeChange(data);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

const getNoteInfo = (handleNoteChange) => {
   
    const xhttp = new XMLHttpRequest();
    const basePath = 'http://localhost:8080';
    const noteid = '2';
    const url = `${basePath}/notes/${noteid}`;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.responseText);
           // console.log(data);
           handleNoteChange(data);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

const getCollectNume = (handleCollectChange) => {
   
    const colNum = '256';
    handleCollectChange(colNum);
   
}


class NotePage extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
          likeNum: null, 
          noteData: null, 
          collectNum: null,
        };

        this.handleLikeChange = this.handleLikeChange.bind(this);
        this.handleCollectChange = this.handleCollectChange.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
    }

    handleLikeChange(newLike) {
        this.setState({
            likeNum: newLike,
        });
    };

    handleNoteChange(newNote) {
        this.setState({
            noteData: newNote,
        });
    };

    handleCollectChange(newCollect) {
        this.setState({
            collectNum:newCollect,
        });
    };

    // 当组件被加载时，我们调用api call
    componentDidMount(){
        //getCurrentLikeNum(this.handleLikeChange);
        getNoteInfo(this.handleNoteChange);
        getCollectNume(this.handleCollectChange);
    }

    render(){

        const {collectNum, noteData } = this.state;
        console.log(collectNum);
        console.log(noteData);
    

        return(
            <NoteCard>
                <CardLeft>
                    <ImageContainer>
                        <ImageLoader src={productImage}/>
                    </ImageContainer>
                </CardLeft>
                <CardRight>
                    <RightContainer>
                        <AuthorRow>
                            <AuthorAvatar>
                                <AuthorAvatarLoader src={avatarImage}/>
                            </AuthorAvatar>
                            <AuthorName>
                                <AuthorNameLabel>Angela Elizabeth</AuthorNameLabel>
                            </AuthorName>
                            <AuthorButtonArea>
                                <AuthorButton>Follow</AuthorButton>
                            </AuthorButtonArea>
                        </AuthorRow>
                        <DisplayedAccordion>
                            <DescriptionContainer>
                                <DescriptionLabel>Infused with divine swirls of toffee, caramel and chocolate, these Brown Obsessions mimic the dreamy tortoiseshell designs that Huda is obsessed with. Effortlessly easy to master, these sumptuously pigmented palettes feature four delectable finishes in complementary tones that look ravishing on every skin tone. Velvety smooth powders, intense metallics, buttery marble cream shimmers, and an irresistible new pearl flake texture give you creative freedom to playfully shade, highlight, and define the eyes</DescriptionLabel>
                            </DescriptionContainer>
                            <LinkedProductContainer>Linked Products</LinkedProductContainer>
                            <ViewCommentsContainer>View Comments</ViewCommentsContainer>
                        </DisplayedAccordion>
                        <FunctionSet>
                            <LikeButton>
                                <FontAwesomeIcon icon={faHeart} />
                            </LikeButton>
                            <LikeNumber>21</LikeNumber>
                            <CollectButton>
                                <FontAwesomeIcon icon={faBookmark} />
                            </CollectButton>
                            <CollectNumber>{collectNum}</CollectNumber>
                            <ForwardButton>
                                <FontAwesomeIcon icon={faReply} />
                            </ForwardButton>
                        </FunctionSet>
                        <QuickCommentContainer>
                            <CommentInput defaultValue = "Say Something..." type = "text" inputColor = "black" />
                        </QuickCommentContainer>
                    </RightContainer>
                </CardRight>
            </NoteCard>    
        )
    }
}
// const NotePage = ({
//     likeNum,
//     collectNum,
//     }) => (
//     <NoteCard>
//         <CardLeft>
//             <ImageContainer>
//                 <ImageLoader src={productImage}/>
//             </ImageContainer>
//         </CardLeft>
//         <CardRight>
//             <RightContainer>
//                 <AuthorRow>
//                     <AuthorAvatar>
//                         <AuthorAvatarLoader src={avatarImage}/>
//                     </AuthorAvatar>
//                     <AuthorName>
//                         <AuthorNameLabel>Angela Elizabeth</AuthorNameLabel>
//                     </AuthorName>
//                     <AuthorButtonArea>
//                         <AuthorButton>Follow</AuthorButton>
//                     </AuthorButtonArea>
//                 </AuthorRow>
//                 <DisplayedAccordion>
//                     <DescriptionContainer>
//                         <DescriptionLabel>Infused with divine swirls of toffee, caramel and chocolate, these Brown Obsessions mimic the dreamy tortoiseshell designs that Huda is obsessed with. Effortlessly easy to master, these sumptuously pigmented palettes feature four delectable finishes in complementary tones that look ravishing on every skin tone. Velvety smooth powders, intense metallics, buttery marble cream shimmers, and an irresistible new pearl flake texture give you creative freedom to playfully shade, highlight, and define the eyes</DescriptionLabel>
//                     </DescriptionContainer>
//                     <LinkedProductContainer>Linked Products</LinkedProductContainer>
//                     <ViewCommentsContainer>View Comments</ViewCommentsContainer>
//                 </DisplayedAccordion>
//                 <FunctionSet>
//                     <LikeButton>
//                         <FontAwesomeIcon icon={faHeart} />
//                     </LikeButton>
//                     <LikeNumber likeNum = {likeNum}>21</LikeNumber>
//                     <CollectButton>
//                         <FontAwesomeIcon icon={faBookmark} />
//                     </CollectButton>
//                     <CollectNumber>32</CollectNumber>
//                     <ForwardButton>
//                         <FontAwesomeIcon icon={faReply} />
//                     </ForwardButton>
//                 </FunctionSet>
//                 <QuickCommentContainer>
//                     <CommentInput defaultValue = "Say Something..." type = "text" inputColor = "black" />
//                 </QuickCommentContainer>
//             </RightContainer>
//         </CardRight>
//         </NoteCard>    

// );

export default NotePage;