import React, {useEffect, useState} from 'react';
import List from './comp/List.jsx';

import './css/App.css';

const App = () => {
  // 배열이어야 map을 쓸 수 있다 ~~ 왜 이런걸 빼먹니
  // modify(수정) / reader(읽기) / delete(삭제)
  const [values, setValues] = useState([{id: 0, title: '이것은 기본 State 메시지', mode: 'reader'}]);
  const [newValues, setNewValues] = useState();
  

  const InputData = (e) => {
    setNewValues(e.target.value) // newValues = e.target.value
  }

  const addValue = (e) => {
    if (newValues === '') {
      alert('인풋에 값이 없습니다. 값을 입력해 주세요.') 
    } else {
      // 기존 values라는 배열에 새로운 객체(newValues와 기타 데이터)를 추가함
      setValues([...values, { title: newValues, id: values.length, mode:'reader'}])
    }
  }

  // 수정모드 전환
  const changeModeModify = (id) => {
    const updateVal = values.map(val => {
      if (val.id === +id) {
        if (val.mode === 'reader') {
          val.mode = 'modify'
        } else return val;
      }
      return val;
    })
    console.log(updateVal);
    setValues(updateVal);
  }

  // 읽기모드 전환
  const changeModeRead = (id) => {
    // debugger;
    const updateVal = values.map(val => {
      if (val.id === +id) {
        if (val.mode !== 'reader') {
          val.mode = 'reader'
        } else return val;
      }
      return val;
    })
    console.log(updateVal);
    setValues(updateVal);
  }

  // 삭제
  const changeModeDelete = (id) => {
    // debugger;
    const updateVal = values.filter(val => 
      val.id !== id
    )
    setValues(updateVal);
    console.log(updateVal)
  }

  // 수정된 값 감지
  const modifyData = (e, id) => {
    // debugger;
    const updateVal = values.map(val => {
      if (val.id === +id) {
        val.title = e.target.value
      }
      return val;
    })
    setNewValues(updateVal);
  }

  // useEffect : values가 변경되면 출력
  useEffect(() => {
    console.log(values)
    return () => {
    }
  }, [values])


  return (
    <div className="App">
      <div>
        <h1>제목만 쓸 수 있는 이상한 블로그</h1>
        <input type="text" name="input" onChange={InputData}/>
        <button onClick={addValue}>입력!</button>
      </div>

      <List values={values} changeModeDelete={changeModeDelete} changeModeModify={changeModeModify} changeModeRead={changeModeRead} modifyData={modifyData}/>
    </div>
  );
}
export default App;
