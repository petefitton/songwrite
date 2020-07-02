import React, {useState, useEffect} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {userContext} from './userContext'
import {decode as jwtDecode} from 'jsonwebtoken'
// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'
import { Counter } from './features/counter/Counter'
import { TestComp } from './features/testFeature/TestComp'
import OpeningScreen from './features/opening/OpeningScreen'
import CreateAccount from './features/create/CreateAccount'
// import Form from './features/form/Form'
import Login from './features/login/Login'
import NewGame from './features/newGame/NewGame'
import MainMenu from './features/mainMenu/MainMenu'
import Practice from './features/practice/Practice'
import PracticeResult from './features/practice/PracticeResult'
import BuySell from './features/buySell/BuySell'
import UpgradeRoom from './features/room/UpgradeRoom'
import UpgradeRoomResult from './features/room/UpgradeRoomResult'
import WriteRecord from './features/writeRecord/WriteRecord'
import WriteRecordResult from './features/writeRecord/WriteRecordResult'
import Release from './features/release/Release'
import ReleaseResult from './features/release/ReleaseResult'
import SocialMedia from './features/social/SocialMedia'
import SocialMediaResult from './features/social/SocialMediaResult'
import Achievements from './features/achievements/Achievements'
import Save from './features/save/Save'
import Saving from './features/save/Saving'
import Saved from './features/save/Saved'
import Logout from './features/logout/Logout'
import Promotion from './features/promotion/Promotion'
import InsufficientFunds from './features/insufficient/InsufficientFunds'
import InsufficientSell from './features/insufficient/InsufficientSell'
import InsufficientBedroom from './features/insufficient/InsufficientBedroom'
import Error from './Error'
import './App.css'
import store from './app/store'
import { updateTester } from './actions'
// import {
//   selectCount,
// } from './features/counter/counterSlice'


function App() {
  let [user, setUser] = useState(null)
  // const dispatch = useDispatch()
  // store.subscribe(() => dispatch(updateTester()))
  // const [test, setTest] = useState('')
  // const counterooni = store.getState().counter.value
  // const counterooni = useSelector(selectCount)

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/`)
  //     .then((res, req) => {
  //       setTest(res.data.test)
  //     }).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   store.dispatch(updateTester())
  // }, [counterooni])

  useEffect(() => {
    decodeToken(null)
  }, [])

  const updateUser = newToken => {
    if (newToken) {
      localStorage.setItem('sernToken', newToken)
      decodeToken(newToken)
    } else {
      setUser(null)
    }
  }

  const decodeToken = existingToken => {
    let token = existingToken || localStorage.getItem('sernToken')
    if (token) {
      let decoded = jwtDecode(token)
      if (!decoded || Date.now() >= decoded.exp * 1000) {
        setUser(null)
      } else {
        setUser(decoded)
      }
    } else {
      setUser(null)
    }
  }

  const testChange = function() {
    store.dispatch(updateTester())
  }

  // const mapStateToProps = state => ({ updateTester })

  return (
    <BrowserRouter>
      <userContext.Provider value={user} >
        <div className="App">
          <header className="App-header">
            {/* <h1>SONGWRITE</h1> */}
            {/* <button onClick={testChange}>TRY IT OUT</button> */}
            {/* <TestComp /> */}
            {/* <Counter /> */}
            <Switch>
              <Route exact path="/" render={() => <OpeningScreen />} />
              <Route exact path="/create" render={() => <CreateAccount updateUser={updateUser} />} />
              <Route exact path="/login" render={() => <Login updateUser={updateUser} />} />
              <Route exact path="/new" render={() => <NewGame updateUser={updateUser} />} />
              <Route exact path="/menu" render={() => <MainMenu updateUser={updateUser} />} />
              <Route exact path="/practice" render={() => <Practice updateUser={updateUser} />} />
              <Route exact path="/practiced" render={() => <PracticeResult updateUser={updateUser} />} />
              <Route exact path="/buysell" render={() => <BuySell updateUser={updateUser} />} />
              <Route exact path="/upgraderoom" render={() => <UpgradeRoom updateUser={updateUser} />} />
              <Route exact path="/upgradedroom" render={() => <UpgradeRoomResult updateUser={updateUser} />} />
              <Route exact path="/writerecord" render={() => <WriteRecord updateUser={updateUser} />} />
              <Route exact path="/wroterecorded" render={() => <WriteRecordResult updateUser={updateUser} />} />
              <Route exact path="/release" render={() => <Release updateUser={updateUser} />} />
              <Route exact path="/released" render={() => <ReleaseResult updateUser={updateUser} />} />
              <Route exact path="/social" render={() => <SocialMedia updateUser={updateUser} />} />
              <Route exact path="/socialposted" render={() => <SocialMediaResult updateUser={updateUser} />} />
              <Route exact path="/achievements" render={() => <Achievements updateUser={updateUser} />} />
              <Route exact path="/save" render={() => <Save updateUser={updateUser} />} />
              <Route exact path="/saving" render={() => <Saving updateUser={updateUser} />} />
              <Route exact path="/saved" render={() => <Saved updateUser={updateUser} />} />
              <Route exact path="/logout" render={() => <Logout updateUser={updateUser} />} />
              <Route exact path="/promotion" render={() => <Promotion updateUser={updateUser} />} />
              <Route exact path="/insufffunds" render={() => <InsufficientFunds updateUser={updateUser} />} />
              <Route exact path="/insuffsell" render={() => <InsufficientSell updateUser={updateUser} />} />
              <Route exact path="/insuffroom" render={() => <InsufficientBedroom updateUser={updateUser} />} />
              <Route path="*" render={() => <Error />} />
            </Switch>


            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span> */}
          </header>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
