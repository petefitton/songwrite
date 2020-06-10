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

function NavElement(props) {

  let navLocation = "/" + props.name.toLowerCase()

  return (
    <>
      {/* <img></img> */}
      <Link to={navLocation} style={{fontSize: "20px", color: "black", textDecoration: "none"}}>{props.name}</Link>
      {/* <p style={{fontSize: "10px"}}>{props.name}</p> */}
    </>
  )
}

export default NavElement