//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import SellInstrument from './SellInstrument'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function SellPane() {

  return (
    <>
      {/* function for displaying each owned instrument */}
      <SellInstrument />
    </>
  )
}

export default SellPane