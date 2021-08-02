import styled from "styled-components";

const LowestPriceLabel = styled.p`
  position: relative;
  box-sizing: border-box;

  //border: solid 0.5px #a86c6d;

  width: 100%;

  font-size: 1.8rem;
  font-family: New Paris;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  text-align: left;
  color: black;
  padding-left: 2px;

  ::before {
    content: "Lowest price found ";
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
`;

export default LowestPriceLabel;
