import styled from "styled-components";

const TabDisplayContainer = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 12px;
  width: 352px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: none;
  border-left: solid 0.6px #c7c7c7;
  border-right: solid 0.6px #c7c7c7;
  border-bottom: solid 0.6px #c7c7c7;
  
  overflow-y: scroll;
  overflow-x:hidden;
`;

export default TabDisplayContainer;