//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import ContinueBtn from './../ContinueBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function PaneThree() {

  return (
    <>
      <p className="Newthree" style={{padding: "22px"}}>Choose actions for every week and manage your money well!  Reach 1000 fans to win.</p>
      {/* <Next class="Newthree" currentPage="Newthree" /> */}
      <ContinueBtn class={"Newthree"} />
    </>
  )
}

export default PaneThree