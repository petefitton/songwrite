import React from 'react'
// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios'
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { TestComp } from './features/testFeature/TestComp';
import './App.css'
import store from './app/store'
import { updateTester } from './actions'
// import {
//   selectCount,
// } from './features/counter/counterSlice';


function App() {
  // const dispatch = useDispatch()
  // store.subscribe(() => dispatch(updateTester()));
  // const [test, setTest] = useState('')
  // const counterooni = store.getState().counter.value
  // const counterooni = useSelector(selectCount);

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/`)
  //     .then((res, req) => {
  //       setTest(res.data.test)
  //     }).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   store.dispatch(updateTester())
  // }, [counterooni])

  const testChange = function() {
    store.dispatch(updateTester())
  }

  // const mapStateToProps = state => ({ updateTester })

  return (
    <div className="App">
      <header className="App-header">
        <h1>SONGWRITE</h1>
        <button onClick={testChange}>TRY IT OUT</button>
        <TestComp />
        <Counter />



        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
