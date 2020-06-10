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

function SocialMedia() {

  return (
    <>
      <p>Would you like to make a post on social media about your music?</p>
      <Btn link="/socialposted" text="Post"></Btn>
    </>
  )
}

export default SocialMedia