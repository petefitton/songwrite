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

function ReleaseResult() {

  return (
    <>
      <p>You released SONG NAME</p>
      <p> You gained 1 fan</p>
      <ContinueBtn />
    </>
  )
}

export default ReleaseResult