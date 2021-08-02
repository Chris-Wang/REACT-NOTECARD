import styled from "styled-components";

const ImageArrowBtn = styled.button`
  font-size: 2em;
  margin: 0;
  border: none;
  color: white;

  background: transparent;

  position: absolute;
  top: 48%;

  opacity: 0.6;

  &:hover {
    transform: translateZ(-2px);
    transition: width 0.3s ease-in-out;
    color: black;
  }

  &:active {
    color: #a86c6d;
  }
`;

export default ImageArrowBtn;
