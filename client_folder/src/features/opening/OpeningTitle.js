//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import OpeningImage from './OpeningImage'
import Title from './../Title'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function OpeningTitle() {

  return (
    <>
      <OpeningImage />
      <Title />
    </>
  )
}

export default OpeningTitle