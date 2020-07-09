import { UPDATE_USER, FAIL_USER } from './actions'
import axios from 'axios'
import {decode as jwtDecode} from 'jsonwebtoken'

const initialState = {
  user: null
}

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case UPDATE_USER:
      let token = localStorage.getItem('sernToken')
      let decoded = jwtDecode(token)
      // store.dispatch(updateUserInfo(decoded))
      // console.log(decoded)
      // console.log(decoded.name)
      console.log("about to hit axios call in AppRedux userReducer function")
      axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${decoded.name}`).then(res => {
        // update user
        // store.getState.userInfo
        console.log("this is the res: ", res)
        // console.log("this is the res: ", res)
        return {action: action.text, state: res}
      }).catch(err => console.log(err))
    default:
      // fail to update user
      return state
  }
}

export default userReducer