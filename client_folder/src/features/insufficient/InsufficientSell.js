// needed components located in buySell features folder

//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import { Link } from 'react-router-dom'
import SellPane from './../buySell/SellPane'
import Slots from './../buySell/Slots'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function InsufficientSell() {

  return (
    <>
      <SellPane />
      {/* SellPane should appropriately sell instruments for both situations of buySell or insufffunds */}
      <Slots />
      {/* when instrument is sold, insuff funds should be checked for again before proceeding */}
      <Link to='/insufffunds' style={{textDecoration: "none", color: "black", position: "absolute", bottom: "40px", right: "40px"}}>Back</Link>
    </>
  )
}

export default InsufficientSell