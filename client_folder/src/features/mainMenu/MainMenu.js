//IMPORT:
//methods from frameworks/libraries
//variables/constants/other declarations
//Redux store & other Redux pieces if applicable (actions, reducers, constants)
//Other React components

import React from 'react'
import Btn from './../Btn'
import NavBar from './NavBar'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './app/store'
// import { updateTester } from './actions'

function MainMenu() {

  return (
    <>
      <p className="username"style={{fontSize: "calc(5px + 2vmin)", fontWeight: "bold", position: "absolute", top: "-5px", left: "20px"}}>Username</p>
      <p style={{fontSize: "calc(2vmin)"}}>Fans: 0</p>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        <Btn link="/practice" text="Practice Instrument" />
        <Btn link="/writerecord" text="Write & Record Song" />
        <Btn link="/buysell" text="Buy/Sell Instrument" />
        <Btn link="/release" text="Release Song" />
        <Btn link="/upgraderoom" text="Upgrade Bedroom" />
        <Btn link="/social" text="Post on Social Media" />
      </div>
      <p style={{fontSize: "calc(2vmin)", marginBottom: "0px"}}>Bank Account: $1000</p>
      <p style={{fontSize: "calc(2vmin)", marginBottom: "0px"}}>Weekly Income: $350</p>
      <p style={{fontSize: "calc(2vmin)", marginBottom: "50px"}}>Weekly Rent: $250</p>
      <NavBar />
    </>
  )
}

export default MainMenu