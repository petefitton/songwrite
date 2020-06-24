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

function InsufficientBedroom() {

  return (
    <>
      <p>You have downgraded your bedroom</p>
      <ContinueBtn />
      {/* When bedroom is downgraded, insuff funds should be checked again before proceeding back to Menu */}
      {/* meaning ContinueBtn may need to be change */}
    </>
  )
}

export default InsufficientBedroom