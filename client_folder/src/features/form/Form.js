//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import FormLabel from './FormLabel'
import FormField from './FormField'
import Btn from './../Btn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Form(props) {

  return (
    <>
      <FormLabel text={props.labelOne} />
      <FormField />
      <FormLabel text={props.labelTwo} />
      <FormField />
      <Btn func={props.func} text={props.btn} link={props.link} />
    </>
  )
}

export default Form