import React, { useContext } from 'react';
import { ValContext } from '../App.js' // 임시 스토어 역할
import Item from './Item.jsx';

import '../css/List.css';


const List = () => {
  const {values, dispatch} = useContext(ValContext);

  const valueList = values.map((val) => 
    <Item 
      key={val.id}
      val={val}
      dispatch={dispatch}
    /> 
  )
  return (
    <ul className="list">
      {valueList}
    </ul>
  );
}
export default List;
