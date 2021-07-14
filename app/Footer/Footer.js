import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';

const FooterContainer = styled(Flex)`
    margin: 0;
    padding: 4px;
    max-height: 20px;
    background-color: #f4ded7;
    align-items: center;

`;

const FooterText = styled.div`
    font-family: sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.18px;
    text-align: center;
    color: #a86c6d;
    margin: 0 auto;
`;


const Footer = () => (
    <FooterContainer>
        <FooterText>
        Copyright © Polar 2021 All right reserved
        </FooterText>
    </FooterContainer>
);


export default Footer;