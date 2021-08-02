import styled from "styled-components";

const HeaderButton = styled.button`
  width: 20px;
  height: 20px;
  font-size: 1.2em;
  margin: 0 15px 0 0;
  padding: 0;
  border: none;
  color: #9f6f6e;
  background-color: #f4ded7;

  &:hover {
    transform: translateZ(-2px);
    transition: width 0.3s ease-in-out;
  }

  &:active {
    color: white;
  }
`;

export default HeaderButton;
