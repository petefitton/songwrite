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
    <div style={{display: "flex", width: "100%", justifyContent: "space-evenly", backgroundColor: "rgb(97,140,236)", borderTop: "1px solid black", position: "absolute", bottom: "0"}}>
      <NavElement name="Save" />
      <NavElement name="Achievements" />
      <NavElement name="Logout" />
    </div>
  )
}

export default NavBar