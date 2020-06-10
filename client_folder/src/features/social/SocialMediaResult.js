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

function SocialMediaResult() {

  return (
    <>
      {/* Conditional rendering of text */}
      <p>You posted but do not have any released music to attrac fans yet</p>
      <p>OR</p>
      <p>You got some plays and have 1 new fan!</p>
      <ContinueBtn />
    </>
  )
}

export default SocialMediaResult