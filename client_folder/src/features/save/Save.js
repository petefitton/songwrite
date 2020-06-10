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

function Save() {

  return (
    <>
      <p>Would you like to save your game?</p>
      <Btn text="Save" link="/saving" />
      <BackBtn />
    </>
  )
}

export default Save