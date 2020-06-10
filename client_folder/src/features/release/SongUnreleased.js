//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Btn from './../Btn'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function SongUnreleased() {

  return (
    <>
      <p>Song Name</p>
      <div>
        <p>5/100</p>
        <Btn link="/released" text="Release"></Btn>
      </div>
    </>
  )
}

export default SongUnreleased