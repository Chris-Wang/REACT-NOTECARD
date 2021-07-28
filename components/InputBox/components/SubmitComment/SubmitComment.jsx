import styled from "styled-components";

const SubmitComment = styled.button`
  position: absolute;
  right: 20px;
  top: 11px;
  font-size: 1em;
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

export default SubmitComment;
