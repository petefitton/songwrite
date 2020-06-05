//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function FormLabel(props) {

  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

export default FormLabel