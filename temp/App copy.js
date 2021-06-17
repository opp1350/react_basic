import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState('this is value');
  
  const test = () => {
    console.log('test event!')
    setNumber(
      number + 1
    )
  }
  const test2 = () => {
    console.log('test2 event!')
    setValue(
      value + '1'
    )
  }
  useEffect (() => {
    console.log('created')
    return () => {
      console.log('destroyed!!!')
    }
  },[])
  
  useEffect (() => {
    console.log('side Effect' + number)
    return () => {
      console.log('side Effect like unMount => number is changed!')
    }
  },[number])


  return (
    <div className="App">
      <button onClick={
        function(){
          setShow(!show)
        }
      }>show or delete</button><br/><br/>
      {show ? <div>
        <p>number : {number}</p>
        <p>value : {value}</p>
        <button onClick={test}>number change</button><br/><br/>
        <button onClick={test2}>value change</button>
      </div> : null}
    </div>
  );
}

// class App extends Component {
//     state = {
//       count: 0
//     };
//     test = () => {
//       this.setState({
//         count: this.state.count + 1
//       })
//     }

//   componentWillMount (){
//     console.log('componentWillMount');
//   }

//   componentDidMount (){
//     console.log('componentDidMount');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate');
//     return true;
//   }

//   componentWillUpdate() {
//     console.log('componentWillUpdate');
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

//   render() {
//     console.log('render')
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.test}>check</button>
//       </div>
//     );
//   }
// }

export default App;
