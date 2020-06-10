//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function BackBtn() {

  return (
    <>
      <Link to='/menu' style={{textDecoration: "none", color: "black", position: "absolute", bottom: "40px", right: "40px"}}>Back</Link>
    </>
  )
}

export default BackBtn