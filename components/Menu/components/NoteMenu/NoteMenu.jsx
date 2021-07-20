import styled from "styled-components";
import FlexBox from "../../../Layout/FlexBox"

const NoteMenu = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  background-color: #ffffff;
  bottom: 125px;
  right: 100px;

  padding: 0px 3px 0 12px;
  margin: 2px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  width: 280px;
  height: 300px;
`;

export default NoteMenu;