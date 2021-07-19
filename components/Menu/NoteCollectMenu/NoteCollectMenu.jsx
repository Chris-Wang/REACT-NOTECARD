import styled from "styled-components";
import FlexBox from "../../Layout/FlexBox";

const NoteCollectMenu = styled(FlexBox)`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  background-color: #ffffff;
  bottom: 125px;
  right: 30px;

  padding: 12px;
  margin: 2px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #a86c6d;

  width: 280px;
  height: 300px;
`;

export default NoteCollectMenu;
