import styled from "styled-components";

const LoginBtn = styled.button`
  margin-top: 12px;
  width: 260px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #c7c7c7;

  // letter-spacing: 0.5px;
  // line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: #a86c6d;
  font-family: "Poppins";
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #a86c6d;
    color: white;
    border: none;
  }
`;

export default LoginBtn;
