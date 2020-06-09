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

function ContinueBtn(props) {
  const history = useHistory()

  function cont(e, nextPage=props.nextPage) {
    e.preventDefault()
    history.push("/menu")
  }

  return (
    <>
      <button style={{height: "40px", width: "150px"}} className={props.class} onClick={(e) => cont(e)}>Continue</button>
    </>
  )
}

export default ContinueBtn