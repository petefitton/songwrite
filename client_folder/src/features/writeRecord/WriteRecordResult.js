//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import ContinueBtn from './../ContinueBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function WriteRecordResult() {

  return (
    <>
      <p>Random Song Name</p>
      <p>You aren't very proud of your song, but you have to start somewhere!</p>
      <p>5/100</p>
      <ContinueBtn />
    </>
  )
}

export default WriteRecordResult