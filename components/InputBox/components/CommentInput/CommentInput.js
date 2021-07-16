import styled from "styled-components";

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

export default CommentInput;