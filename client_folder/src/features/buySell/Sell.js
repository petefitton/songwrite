//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import SellPane from './SellPane'
import Slots from './Slots'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Sell() {

  return (
    <>
      <p>Sell Comp</p>
      <SellPane />
      <Slots />
      <BackBtn />
    </>
  )
}

export default Sell