//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import NavElement from './NavElement'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function NavBar() {

  return (
    <>
      <NavElement />
      <NavElement />
      <NavElement />
    </>
  )
}

export default NavBar