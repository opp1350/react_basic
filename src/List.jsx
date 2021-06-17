import React from 'react';

const List = ({values}) => {
  const valueList = values.map( (val, idx) => <li key={'value' + idx}>{val.title}</li> )
  return (
    <ul className="list">
      {valueList}
    </ul>
  );
}
export default List;
