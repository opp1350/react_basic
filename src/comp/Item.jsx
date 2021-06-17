import React from 'react';
import '../css/Item.css';


const Item = ({val, changeModeModify, changeModeDelete, changeModeRead, modifyData}) => {
  const changeItemMtoR = (e) => {
    const id = e.target.dataset.id;
    if ( val.mode !== 'modify' ) {
      changeModeModify(id)
      console.log('수정모드로 변경')
    } else if ( val.mode !== 'reader') {
      changeModeRead(id)
      console.log('읽기모드로 변경')
    }
  }

  const changeItemDelete = (e) => {
    const id = e.target.dataset.id;
    console.log('삭제 이벤트')
    changeModeDelete(id)
  }

  const inputDataChange = (e) => {
    const id = e.target.dataset.id;
    modifyData(e, id)
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
