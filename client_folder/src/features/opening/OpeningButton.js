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

function OpeningButton(props) {

  return (
    <>
      <Link to={props.link}>{props.text}</Link>
    </>
  )
}

export default OpeningButton