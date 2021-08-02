import styled from "styled-components";

const BrandFollowBtn = styled.button`
  width: 60px;
  height: 20px;
  font-size: 0.75em;
  margin: 0;
  padding: 0;
  color: white;
  background-color: #a86c6d;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  text-align: center;

  &:hover {
    transform: translateZ(-2px);
    transition: width 0.3s ease-in-out;
  }

  &:active {
    color: black;
  }
`;

export default BrandFollowBtn;
