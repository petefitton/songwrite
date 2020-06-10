//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import { useHistory } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Saving() {
  const history = useHistory()

  function func() {history.push("/saved")}

  setTimeout(func, 3000)

  return (
    <>
      <p>Saving in Progress</p>
    </>
  )
}

export default Saving