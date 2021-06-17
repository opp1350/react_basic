import React, { useEffect, useState, useReducer } from 'react';
import List from './comp/List.jsx';
import Form from './comp/Form.jsx';

import './css/App.css';

// 컨텍스트 (스토어) 생성
export const ValContext = React.createContext();

const valuesReducer = (values, {type, payload}) => {
  switch (type) {
    case 'ADD_VALUES': 
      return [...values, { 'title': payload, 'id': values.length, 'mode' :'reader'}];
    case 'SET_INIT_DATA': 
      return payload;
    case 'CHANGE_MODE__MODIFY': 
      return values.map(val => {
        if (val.id === +payload) {
          if (val.mode === 'reader') {
            val.mode = 'modify'
          } else return val;
        }
        return val;
      });
    case 'CHANGE_MODE__READER': 
      return values.map(val => {
        if (val.id === +payload) {
          if (val.mode !== 'reader') {
            val.mode = 'reader'
          } else return val;
        }
        return val;
      });
    case 'MODIFY_DATA':
      return values.map(val => {
        if (val.id === +payload.id) {
          val.title = payload.title
        }
        return val;
      })
    default:
      break;
  }
}

const App = () => {
  // modify(수정) / reader(읽기) / delete(삭제)
  // const [values, setValues] = useState(
  //   [
  //     {
  //       id: 0,
  //       title: '이것은 기본 State 메시지',
  //       mode: 'reader'
  //     }
  //   ]
  // );

  const [values, dispatch] = useReducer(valuesReducer, 
    [
      {
        id: 0,
        title: '이것은 기본 State 메시지',
        mode: 'reader'
      }
    ]
  );

  const setInitData = (initData) => {
    dispatch({
      type: 'SET_INIT_DATA',
      payload: initData
    })
  }

  // 입력한 값을 목록에 추가
  // const addValue = (newValues) => {
  //   if (newValues === '') {
  //     alert('인풋에 값이 없습니다. 값을 입력해 주세요.')
  //   } else {
  //     // 기존 values라는 배열에 새로운 객체(newValues와 기타 데이터)를 추가함
  //     //setValues([...values, { title: newValues, id: values.length, mode:'reader'}])
  //   }
  // }

  // 수정모드 전환
  // const changeModeModify = (id) => {
  //   const updateVal = values.map(val => {
  //     if (val.id === +id) {
  //       if (val.mode === 'reader') {
  //         val.mode = 'modify'
  //       } else return val;
  //     }
  //     return val;
  //   })
  //   console.log(updateVal);
  //   //setValues(updateVal);
  // }

  // 읽기모드 전환
  // const changeModeRead = (id) => {
  //   // debugger;
  //   const updateVal = values.map(val => {
  //     if (val.id === +id) {
  //       if (val.mode !== 'reader') {
  //         val.mode = 'reader'
  //       } else return val;
  //     }
  //     return val;
  //   })
  //   console.log(updateVal);
  //   // setValues(updateVal);
  // }

  // 삭제
  const changeModeDelete = (id) => {
    // debugger;
    const updateVal = values.filter(val => 
      val.id !== id
    )
    //setValues(updateVal);
    console.log(updateVal)
  }

  // 수정된 값 감지
  // const modifyData = (e, id) => {
  //   // debugger;
  //   const updateVal = values.map(val => {
  //     if (val.id === +id) {
  //       val.title = e.target.value
  //     }
  //     return val;
  //   })
  //   //setValues(updateVal);
  // }

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
          // addValue,
          dispatch,
          changeModeDelete,
          // changeModeModify,
          // changeModeRead,
          // modifyData
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
