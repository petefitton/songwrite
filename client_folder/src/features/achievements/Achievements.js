//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Achievement from './Achievement'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Achievements() {

  return (
    <>
      <p>Achievements</p>
      <Achievement />
      <BackBtn />
    </>
  )
}

export default Achievements