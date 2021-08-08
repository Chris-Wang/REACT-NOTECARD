import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 280px;
  height: 60px;
  border: solid 1px #a86c6d;
  margin-top: 6px;
`;

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputContainer>
    <input onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </InputContainer>
);

export default FormInput;
