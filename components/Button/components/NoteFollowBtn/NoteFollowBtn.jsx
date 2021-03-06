import styled from "styled-components";

const NoteFollowBtn = styled.button`
  width: 80px;
  height: 20px;
  font-size: 0.75em;
  margin: 0;
  padding: 0;
  color: white;
  background-color: #a86c6d;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  text-align: center;

  &:hover {
    transform: translateZ(-2px);
    transition: width 0.8s ease-in-out;
    color: #f4ded7;
  }

  &:active {
    color: grey;
  }
`;

export default NoteFollowBtn;
