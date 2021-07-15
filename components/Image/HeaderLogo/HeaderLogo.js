import styled from 'styled-components';

const HeaderLogo = styled.img`
    width: 88px;
    height: 44px;
    flex-grow: 0;
    margin: 0 0 0 0; 

    border-radius: 4px;
    transition-property: transform, box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    // &:hover{
    //     transform: translateZ(-2px);
    //     box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
    // }
`;

export default HeaderLogo;