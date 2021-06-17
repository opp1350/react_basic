import React from 'react';
import Item from './Item.jsx';

import '../css/List.css';


const List = ({values, changeModeModify, changeModeDelete, changeModeRead, InputData, modifyData}) => {
  const valueList = values.map( (val) => 
    <Item 
      key={val.id}
      val={val}
      changeModeDelete={changeModeDelete}
      changeModeModify={changeModeModify}
      changeModeRead={changeModeRead}
      modifyData={modifyData}
    /> 
  )
  return (
    <ul className="list">
      {valueList}
    </ul>
  );
}
export default List;
