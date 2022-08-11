import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100px;
  height: 30px;
  border: none;
  :focus{
    outline: none;
  }
`;

function DateFilter(props) {
  const { todoList, onChange } = props;


  let dateLists
  if (todoList) {
    dateLists = todoList.map((list) => {
      return list.createdAt.substr(0, 10);
    })
  }
  let dateList = new Set(dateLists);
  dateLists = Array.from(dateList);

  return (
    <StyledSelect onChange={onChange}>
      {dateLists.map((list) => {
        return (
          <option>{list}</option>
        );
      })}
    </StyledSelect>
  )
}

export default DateFilter;