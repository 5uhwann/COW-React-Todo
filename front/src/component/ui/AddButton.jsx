import React from 'react';
import styled from "styled-components"
import axios from 'axios';

const StyledAddButton = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  background: #7890E7;
  font-size: xx-large;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin: auto;
  font-size: 50px;
  :hover{
    transform: scale(1.1);
    transition: all 0.3s;
    box-shadow: 0px 0px 9px 3px rgb(222 221 221);
  }
`;

function AddButton(props) {
  const { content } = props;

  return (
    <StyledAddButton onClick={() => {
      axios.post("/todo",
        {
          content: " "
        })
    }}>
      {content}
    </StyledAddButton>
  )
}

export default AddButton;