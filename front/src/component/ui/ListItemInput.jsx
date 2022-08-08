import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 85%;
  height: 80%;
  border: none;
  :focus{
    outline: none;
  }
  background: transparent;
  cursor: pointer;
`;

function Input(props) {

  const { value, onChange, disable, onBlur } = props;

  return <StyledInput
    disabled={disable}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    autoFocus={true}
  />
}

export default Input;