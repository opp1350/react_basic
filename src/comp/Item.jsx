import React, { useContext } from 'react';
import { ValContext } from '../App.js' // 임시 스토어 역할

import '../css/Item.css';


const Item = ({val}) => {
  const {changeModeDelete, dispatch} = useContext(ValContext);

  
  const changeItemMtoR = (e) => {
    const id = e.target.dataset.id;
    if ( val.mode !== 'modify' ) {
      dispatch({
        type:'CHANGE_MODE__MODIFY', 
        payload : id
      })
      console.log('수정모드로 변경')
    } else if ( val.mode !== 'reader') {
      dispatch({
        type:'CHANGE_MODE__READER', 
        payload : id
      })
      console.log('읽기모드로 변경')
    }
  }

  const changeItemDelete = (e) => {
    const id = e.target.dataset.id;
    console.log('삭제 이벤트')
    changeModeDelete(id)
  }

  const inputDataChange = (e, id) => {
    dispatch (
      {
        type: 'MODIFY_DATA',
        payload: {
          id: e.target.dataset.id,
          title: e.target.value
        }
      }
    )
  }

  const classTest = val.mode === 'reader' ? 'reader' : 'modify';

  return (
    <li className={classTest}>
      {
        val.mode === 'reader' ? 
        <span>{val.title}</span>
        :
        <div className="wrapper">
          <p>수정해 보세요.</p>
          <input type="text" data-id={val.id} value={val.title} onChange={inputDataChange}/>
        </div>
      }
      <button data-id={val.id} onClick={changeItemMtoR}>{
        val.mode === 'reader' ? '수정' : '완료'
      }</button>
      <button data-id={val.id} onClick={changeItemDelete}>삭제</button>
    </li>
  )
}
export default Item;
