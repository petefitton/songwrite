//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import PracticeInstrument from './PracticeInstrument'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function PracticePane() {

  return (
    <>
      {/* for loop that displays a component for each instrument user owns */}
      <PracticeInstrument />
    </>
  )
}

export default PracticePane