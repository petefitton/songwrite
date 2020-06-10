//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Buy from './Buy'
import Sell from './Sell'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function BuySell() {

  return (
    <>
      <Buy />
      <Sell />
    </>
  )
}

export default BuySell