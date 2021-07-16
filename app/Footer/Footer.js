import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import TextLabel from '../../components/TextLabel';

const FooterContainer = styled(Flex)`
    margin: 0;
    min-width: 1008px;
    padding: 4px;
    max-height: 20px;
    background-color: #f4ded7;
    align-items: center;
    justify-content: center;
`;

const Footer = () => (
    <FooterContainer>
        <TextLabel type={"COPYRIGHT"} />
    </FooterContainer>
);


export default Footer;