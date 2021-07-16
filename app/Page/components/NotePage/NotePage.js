import React from 'react';
import styled from 'styled-components';
import avatarImage from '../../../../build/static/media/user_avatar.png';
import getNote from '../../../../apis/getNote';

import CardContainer from '../../../../components/Layout/CardContainer';
import ImageLoader from '../../../../utils/ImageLoader';
import ImageSlider from '../../../../components/Image/ImageSlider/ImageSlider';
import FlexBox from '../../../../components/Layout/FlexBox';
import NoteAuthorImage from '../../../../components/Image/NoteAuthorImage';
import NoteAuthorLabel from '../../../../components/TextLabel/components/NoteAuthorLabel';
import Button from '../../../../components/Button';
import CommentInput from '../../../../components/InputBox/components/CommentInput';

const NoteCard = styled(FlexBox)`
    flex-direction: row;
    flex-shrink: 0;
    width: 1000px;
    
    padding: 3px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #a86c6d;
`;

const ImageContainer = styled(FlexBox)`
    padding: 20px 10px 20px 25px;
`;

const RightBox = styled(FlexBox)`
    flex-direction: column;
    justify-content: center;
    padding: 20px 25px 20px 15px;
`;

const AuthorContainer = styled(FlexBox)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0;
    width: 358px;
    height: 80px;
`;

const AuthorAvatarContainer = styled(FlexBox)`
    justify-content: center;
    align-items: center;

    padding: 5px;
    width: 80px;
    height: 80px;
`;

const AuthorNameContainer = styled(FlexBox)`
    justify-content: center;
    align-items: center;

    padding-left: 5px;
    padding-right: 5px;
    width: 170px;
    height: 80px;
`;

const AuthorButtonContainer = styled(FlexBox)`
    justify-content: center;
    align-items: center;

    padding: 5px;
    width: 100px;
    height: 80px;
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
    font-family: "Segoe UI", sans-serif;
    font-weight: 600;
`;

const ViewCommentsContainer  = styled.div`
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
    font-family: "Segoe UI",sans-serif;
    font-weight: 600;
`;

const FunctionSetContainer = styled(FlexBox)`  
    flex-direction: row;
    justify-content: flex-start;

    padding: 0;
    width: 358px;
    height: 50px;
`;

const QuickCommentContainer = styled(FlexBox)`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    border: solid 0.5px #c7c7c7;

    padding: 10px;
    margin: 0 px 2px 0px 2px;
    width: 352px;
    height: 50px;
`;

{/* <LikeNumber>{noteData.likeNum}</LikeNumber>
                            <Button type={"COLLECTNOTE"} />
                            <CollectNumber>{noteData.collectNum}</CollectNumber> */}

const noteid = '9';
const getNoteInfo = () => getNote(noteid);


class NotePage extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
          noteData: null, 
        };

        this.handleNoteChange = this.handleNoteChange.bind(this);
    }


    handleNoteChange(newNote) {
        this.setState({
            noteData: newNote,
        });
    };


    componentDidMount(){
        getNoteInfo().then(this.handleNoteChange);
    }

    render(){

        const {noteData} = this.state;
        
        if(!noteData){
            return 'Loading';
        }

        return(
            <NoteCard>
                <CardContainer>
                    <ImageContainer>
                        <ImageSlider slides={ImageLoader} />
                    </ImageContainer>
                </CardContainer>
                <CardContainer>
                    <RightBox>
                        <AuthorContainer>
                            <AuthorAvatarContainer>
                              <NoteAuthorImage src={avatarImage}/>
                            </AuthorAvatarContainer>
                            <AuthorNameContainer>
                              <NoteAuthorLabel>{noteData.author}</NoteAuthorLabel>
                            </AuthorNameContainer>
                            <AuthorButtonContainer>
                              <Button type={"AUTHORFOLLOW"} />
                            </AuthorButtonContainer>
                        </AuthorContainer>
                        <DisplayedAccordion>
                            <DescriptionContainer>
                                <DescriptionLabel>{noteData.content}</DescriptionLabel>
                            </DescriptionContainer>
                            <LinkedProductContainer>Linked Products</LinkedProductContainer>
                            <ViewCommentsContainer>View Comments</ViewCommentsContainer>
                        </DisplayedAccordion>
                        <FunctionSetContainer>
                            <Button type={"LIKENOTE"} />
                            <Button type={"LIKENOTEUSERS"} />
                            <Button type={"COLLECTNOTE"} />
                            <Button type={"COLLECTNOTEUSERS"} />
                            <Button type={"FORWARDNOTE"} />
                        </FunctionSetContainer>
                        <QuickCommentContainer>
                            <CommentInput defaultValue = "Say Something..." type = "text" inputColor = "black" />
                        </QuickCommentContainer>
                    </RightBox>
                </CardContainer>
            </NoteCard>    
        )
    }
}

export default NotePage;