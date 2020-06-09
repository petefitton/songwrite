//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Btn from './../Btn'
import NavBar from './NavBar'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function MainMenu() {

  return (
    <>
      <h1>Main Menu</h1>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
      </div>
      <NavBar />
    </>
  )
}

export default MainMenu