//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Btn from './../Btn'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function WriteRecord() {

  return (
    <>
      <p>You have 3 instruments filling 10/12 slots with a combined proficiency of 50/300</p>
      <p>You have written and recorded 0 songs.</p>
      <Btn link="/wroterecorded" text="Write & Record a Song"></Btn>
      <BackBtn />
    </>
  )
}

export default WriteRecord