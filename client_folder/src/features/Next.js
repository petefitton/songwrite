//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function Next(props) {

  function next(e, currentPage=props.currentPage) {
    e.preventDefault()
    if (currentPage === "Newone") {
      document.querySelectorAll('.Newone').forEach(node => node.style.display = "none")
      document.querySelectorAll('.Newtwo').forEach(node => node.style.display = "block")
    } else if (currentPage === "Newtwo") {
      document.querySelectorAll('.Newtwo').forEach(node => node.style.display = "none")
      document.querySelectorAll('.Newthree').forEach(node => node.style.display = "block")
    }
  }

  return (
    <>
      <button style={{height: "40px", width: "150px"}} className={props.class} onClick={(e) => next(e)}>Next</button>
    </>
  )
}

export default Next