import styled from "styled-components";

const CategoryButton = styled.button`
    width: 30px;
    font-size: 1.1em;
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
        color: #9F6F6E;
    }
`;

export default CategoryButton;
