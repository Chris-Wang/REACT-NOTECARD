import styled from "styled-components";

const SubmitButton = styled.button`
  position: absolute;
  right: 15px;
  top: 2px;
  font-size: 0.9em;
  margin-right: 0;
  padding: 0;
  border: none;
  color: #a86c6d;
  background-color: white;
  font-family: "Poppins", sans-serif;

  &:hover {
    transform: translateZ(-2px);
    transition: width 0.3s ease-in-out;
  }

  &:active {
    color: black;
  }
`;

export default SubmitButton;
