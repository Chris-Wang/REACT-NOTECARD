import styled from "styled-components";

const NoteNumsBtn = styled.button`
  padding: 0px;
  margin: 3px auto 0 auto;

  cursor: pointer;
  width: 190px;
  height: 30px;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  // border: none;
  color: black;
  background: transparent;

  border-radius: 5px;
  border: solid 0.6px #c7c7c7;

  &:hover {
    border: solid 0.6px #a86c6d;
  }

  // &:active {
  //   color: #a86c6d;
  // }
`;

export default NoteNumsBtn;
