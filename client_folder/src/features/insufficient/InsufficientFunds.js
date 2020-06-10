//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Btn from './../Btn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function InsufficientFunds() {

  return (
    <>
      <p>You are (still) $100 short on rent this week.  You are forced to (either) sell an instrument (or downgrade your bedroom).</p>
      <Btn link="/insuffsell" text="Sell an Instrument" />
      <Btn link="/insuffroom" text="Downgrade Bedroom" />
    </>
  )
}

export default InsufficientFunds