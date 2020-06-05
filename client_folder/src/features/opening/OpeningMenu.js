//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import OpeningButton from './OpeningButton'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function OpeningMenu() {

  return (
    <>
      <OpeningButton text="New Game" link="create" />
      <OpeningButton text="Continue" link="login" />
    </>
  )
}

export default OpeningMenu