//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import { Link } from 'react-router-dom'
import OpeningTitle from './OpeningTitle'
import OpeningMenu from './OpeningMenu'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function OpeningScreen() {

  return (
    <>
      {/* <Link to="/create">This is a link</Link> */}
      <OpeningTitle />
      <OpeningMenu />
    </>
  )
}

export default OpeningScreen