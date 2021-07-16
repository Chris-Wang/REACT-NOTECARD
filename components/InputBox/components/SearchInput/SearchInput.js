import styled from "styled-components";
import InputField from "../../../Layout/InputField";

const SearchInput = styled(InputField)`
    padding: 0;
    margin: 5px 3px 3px 15px;
    outline: none;
    //color: ${props => props.inputColor || "black"};
    border: none;
    border-radius: 3px;
`;

export default SearchInput;