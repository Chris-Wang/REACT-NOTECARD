import styled from "styled-components";

const ProductCardMini = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  padding: 5px;
  width: 332px;

  border-radius: 5px;
  margin: 0 0 10px 0;
  border: solid 0.6px #c7c7c7;

  height: 106px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 1px 2px 0.5px #a86c6d;
  }
`;

export default ProductCardMini;
