import styled from 'styled-components';
const HeaderLogoButton = styled.button`
    width: 88px;
    height: 44px;
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

export default HeaderLogoButton;