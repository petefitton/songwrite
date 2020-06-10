//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import BuyInstrument from './BuyInstrument'
import Slots from './Slots'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Buy() {

  return (
    <>
      <p>Buy Comp</p>
      {/* Function which randomly determines which instruments can be bought - going back and forth between the main menu and this section should not change the options, so this function and/or three chosen instruments may need to be located in the store or a different location */}
      <BuyInstrument />
      <BuyInstrument />
      <BuyInstrument />
      <Slots />
      <BackBtn />
    </>
  )
}

export default Buy