import React, {useEffect, useState} from 'react';
import List from './List.jsx';

import './App.css';

const App = () => {
  // 배열이어야 map을 쓸 수 있다 ~~ 왜 이런걸 빼먹니
  const [values, setValues] = useState([{title: '이것은 기본 State 메시지', id: 0}]);
  const [newValues, setNewValues] = useState();
  

  const InputData = (e) => {
    setNewValues(e.target.value) // newValues = e.target.value
  }

  const addValue = (e) => {
    if (newValues === '') {
      alert('인풋에 값이 없습니다. 값을 입력해 주세요.') 
    } else {
      // 기존 values라는 배열에 새로운 객체(newValues와 기타 데이터)를 추가함
      setValues([...values, { title: newValues, id: values.length}])
    }
  }

  // const fecthInitialData = async () => {
  //   const response = await fetch('http://localhost:3000');
  //   const initialData = await response.json();
  //   console.log(initialData);
  // }

  useEffect(() => {
    console.log(values)
    return () => {
    }
  }, [values])

  // useEffect(() => {
  //   fecthInitialData();
  //   return () => {
  //   }
  // }, [])

  return (
    <div className="App">
      <div>
        <h1>블로그</h1>
        <input type="text" name="" onChange={InputData}/>
        <button onClick={addValue}>입력!</button>
      </div>

      <List values={values} />
    </div>
  );
}
export default App;
