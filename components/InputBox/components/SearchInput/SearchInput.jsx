import styled from "styled-components";
import InputField from "../../../Layout/InputField";

const SearchInput = styled(InputField)`
  padding: 0;
  margin: 2px 3px 3px 15px;
  outline: none;
  //color: ${(props) => props.inputColor || "black"};
  border: none;
  border-radius: 3px;
  width: 300px;
  font-family: "Poppins", sans-serif;
`;

export default SearchInput;
