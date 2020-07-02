//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Btn from './../Btn'
import BackBtn from './../BackBtn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Logout(props) {
  let [redirect, setRedirect] = useState('')

  let handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('sernToken')
    props.updateUser(null)
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <>
      <p>Would you like to logout?</p>
      <Btn func={handleLogout} link="/" text="Logout" />
      <BackBtn />
    </>
  )
}

export default Logout