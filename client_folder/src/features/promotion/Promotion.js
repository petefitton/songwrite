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

function Promotion() {

  return (
    <>
      <p>You have been offered a job promotion!</p>
      <p>Your weekly income has increased from $250 to $300</p>
      <ContinueBtn />
    </>
  )
}

export default Promotion