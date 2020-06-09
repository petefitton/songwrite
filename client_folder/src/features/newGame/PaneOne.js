//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Next from './../Next'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function PaneOne() {

  return (
    <>
      <p className="Newone" style={{padding: "22px"}}>Welcome to Songwrite!  Hope you're ready to challenge yourself to make incredible music and build yourself from the ground up!</p>
      <Next class="Newone" currentPage={"Newone"} />
    </>
  )
}

export default PaneOne