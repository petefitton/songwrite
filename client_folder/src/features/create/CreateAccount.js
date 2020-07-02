//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React, {useEffect, useState, ChangeEvent, MouseEvent} from 'react'
import Title from './../Title'
import Form from './../form/Form'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
// import { response } from 'express'

// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function CreateAccount(props) {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  let [redirect, setRedirect] = useState(false)

  // const checkLen = (e) => {
  //   let target = e.target
  //   if (target.value.length < 8) {
  //     alert('Password must be at least 8 characters long')
  //   }
  // }

  const submit = (e) => {
    e.preventDefault()
    // let data = {username, password}
    // setUsername(username)
    // setPassword(password)
    let data = {}
    // let data = {name: "petefittonzayzay", password: "passwordpassword"}
    let arr = document.querySelectorAll('input')
    data.name = arr[0].value
    data.password = arr[1].value
    // console.log(data)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
      name: data.name,
      password: data.password
    }).then(res => {
      console.log(res)
      // res.json().then(result => {
        if (res.status === 200) {
          props.updateUser(res.data.token)
          // return <Redirect to="/new" />
          setRedirect(true)
        } else {
          alert('Error')
        }
      // }).catch(err => console.log(err))
    }).catch(err => console.log('Error', err))
  }

  // if (props.user) {
  //   return <Redirect to="/menu" />
  // }

  // const handleRedirect = (e) => {
  //   e.preventDefault()
  //   setRedirect(true)
  // }

  if (redirect) {
    return <Redirect to='/new' />
  }

  return (
    <>
      <Title />
      <Form func={submit} labelOne="Create Username" labelTwo="Create Password" btn="Create Account" link="/new" />
    </>
  )
}

export default CreateAccount