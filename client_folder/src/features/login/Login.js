//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Title from './../Title'
import Form from './../form/Form'
import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Login(props) {
  let [redirect, setRedirect] = useState(false)

  const login = (e) => {
    e.preventDefault()
    let data = {}
    let arr = document.querySelectorAll('input')
    data.name = arr[0].value
    data.password = arr[1].value
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      name: data.name,
      password: data.password
    }).then(res => {
      console.log(res)
        if (res.status === 200) {
          props.updateUser(res.data.token)
          setRedirect(true)
        } else {
          alert('Error')
        }
    }).catch(err => console.log('Error', err))
  }

  if (redirect) {
    return <Redirect to='/menu' />
  }

  return (
    <>
      <Title />
      <Form func={login} labelOne="Username" labelTwo="Password" btn="Login" />
    </>
  )
}

export default Login