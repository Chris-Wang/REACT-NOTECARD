import React from "react";
import styled from "styled-components";
import Flex from "../../components/Flex";
import TextLabel from "../../components/TextLabel";

const FooterContainer = styled(Flex)`
  margin: 0;
  min-width: 99.6vw;
  padding: 2px 0px;
  max-height: 20px;
  background-color: #f4ded7;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const FooterLabelContainer = styled(Flex)`
  margin: 0 auto;
  width: 1000px;
  justify-content: center;
`;

const Footer = () => (
  <FooterContainer>
    <FooterLabelContainer>
      <TextLabel type={"COPYRIGHT"} />
    </FooterLabelContainer>
  </FooterContainer>
);

export default Footer;
