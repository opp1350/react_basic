import React, { useContext, useRef } from 'react';
import { ValContext } from '../App.js' // 임시 스토어 역할

// import '../css/Form.css';


// const Form = ({values, InputData, addValue}) => {
// useContext를 사용하게 되면 프롭스를 받지 않아도 됨
const Form = () => {

  const {values, dispatch} = useContext(ValContext);
  const inputRef = useRef(false)

  const addInputRefValue = (e) => {
    // addValue(inputRef.current.value)
    dispatch (
      {
        type: 'ADD_VALUES',
        payload: inputRef.current.value
      }
    )
  }
  return (
    // Hook을 사용하지 않고 Consumer를 이용했을 때
    // <ValContext.Consumer>
    //   {
    //     ({values, InputData, addValue}) => (
    //       <div>
    //         <input type="text" name="input" value={values.title} onChange={InputData}/>
    //         <button onClick={addValue}>입력!</button>
    //       </div>
    //     )
    //   }
    // </ValContext.Consumer>
    <div>
      <input type="text" name="input" value={values.title} ref={inputRef}/>
      <button onClick={addInputRefValue}>입력!</button>
    </div>
  );
}
export default Form;
