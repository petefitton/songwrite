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

function PaneTwo() {

  return (
    <>
      {/* <img>IMAGE</img> */}
      <p className="Newtwo" style={{padding: "22px"}}>You will start out with a MIDI keyboard and a little experience playing it.</p>
      <Next class="Newtwo" currentPage="Newtwo" />
    </>
  )
}

export default PaneTwo