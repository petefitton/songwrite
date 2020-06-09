//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import PaneOne from './PaneOne'
import PaneTwo from './PaneTwo'
import PaneThree from './PaneThree'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function NewGame() {

  return (
    <>
      <PaneOne />
      <PaneTwo />
      <PaneThree />
    </>
  )
}

export default NewGame