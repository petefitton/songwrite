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

function PracticeResult() {

  return (
    <>
      <p>Practice Result comp</p>
      <p>Image</p>
      <p>You practiced playing the piano and increased your skill</p>
      <p>Skill: 12/100</p>
      <ContinueBtn />
    </>
  )
}

export default PracticeResult