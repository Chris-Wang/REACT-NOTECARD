import styled from "styled-components";

const NoteFunctionBtn = styled.button`
    width: 50px;
    height: 50px;
    font-size: 30px;
    margin: 0;
    padding: 0;
    border: none; 
    color: #c7c7c7;
    background: transparent;

    &:hover{
        transform: translateZ(-2px);=
        transition: width 0.3s ease-in-out;
    }

    &:active {
        color: #a86c6d;
    }


`;

export default NoteFunctionBtn;
