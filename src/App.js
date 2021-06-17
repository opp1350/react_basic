import React, { useEffect, useReducer } from 'react';
import {valuesReducer} from './reducer/reducers.js'
import List from './comp/List.jsx';
import Form from './comp/Form.jsx';

import './css/App.css';

// 컨텍스트 (스토어) 생성
export const ValContext = React.createContext();

const App = () => {
  const [values, dispatch] = useReducer(valuesReducer, 
    [
      {
        id: 0,
        title: '이것은 기본 State 메시지',
        mode: 'reader'
      }
    ]
  );

  // 삭제 (아직 구현 못함)
  const changeModeDelete = (id) => {
    // debugger;
    const updateVal = values.filter(val => 
      val.id !== id
    )
    //setValues(updateVal);
    console.log(updateVal)
  }

  // useEffect : values가 변경되면 출력
  useEffect(() => {
    console.log(values)
    return () => {
    }
  }, [values])

  return (
    <div className="App">
      {/* 프롭스로 전달하지 않고 바로 사용이 가능함. */}
      <ValContext.Provider
        value={{
          values,
          dispatch,
          changeModeDelete
        }}
      >
        <h1>한마디</h1>
        <Form />

        <List />
      </ValContext.Provider>
    </div>
  );
}
export default App;
