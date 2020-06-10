//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import PracticePane from './PracticePane'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Practice() {

  return (
    <>
      <p>practice comp</p>
      <PracticePane />
      <BackBtn />
    </>
  )
}

export default Practice