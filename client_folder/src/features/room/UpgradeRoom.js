//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Btn from './../Btn'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function UpgradeRoom() {

  return (
    <>
      <p>upgrade room comp</p>
      {/* conditional upgrade button render */}
      <Btn link="/upgradedroom" text="Upgrade"></Btn>
      <BackBtn />
    </>
  )
}

export default UpgradeRoom