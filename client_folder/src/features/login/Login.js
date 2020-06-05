//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Title from './../Title'
import Form from './../form/Form'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Login() {

  return (
    <>
      <Title />
      <Form labelOne="Username" labelTwo="Password" btn="Login" />
    </>
  )
}

export default Login