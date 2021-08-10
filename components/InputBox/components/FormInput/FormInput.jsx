import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 260px;
  height: 60px;
  margin-top: 6px;
`;

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <InputContainer>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${value ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </InputContainer>
);

export default FormInput;
