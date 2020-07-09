import store from './app/store'

// THESE ARE ALL EXAMPLES!!!!!!!!!!!!!!!!!!!! from https://redux.js.org/basics/actions

// action types - const definitions
    // export const ADD_TODO = 'ADD_TODO'
    // export const TOGGLE_TODO = 'TOGGLE_TODO'
    // export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// export const UPDATE_TESTER = 'UPDATE_TESTER'
export const UPDATE_USER = 'UPDATE_USER'
export const FAIL_USER = 'FAIL_USER'

// other constants
    // export const VisibilityFilters = {
    //   SHOW_ALL: 'SHOW_ALL',
    //   SHOW_COMPLETED: 'SHOW_COMPLETED',
    //   SHOW_ACTIVE: 'SHOW_ACTIVE'
    // }

// action creators
    // export function addTodo(text) {
    //   return { type: ADD_TODO, text }
    // }

    // export function toggleTodo(index) {
    //   return { type: TOGGLE_TODO, index }
    // }

    // export function setVisibilityFilter(filter) {
    //   return { type: SET_VISIBILITY_FILTER, filter }
    // }

// action creator which is used in APP.js file and is a callback in the store.dispatch() method
// export function updateTester() {
//     if (store.getState().counter.value !== 0) {
//         console.log("1")
//         return { type: UPDATE_TESTER, text: 'test success'}
//     } else {
//         console.log("2")
//         return { type: UPDATE_TESTER, text: 'testeroo'}
//     }
// }

export function updateUserInfo(user) {
    // axios.get('/user', {user: user})
    // db.user.findOne({where: {user: user}})
    // .then(user => {
        if (user) {
            return { type: UPDATE_USER, text: 'updating user information'}
        } else {
            return { type: FAIL_USER, text: 'cannot update user information'}
        }
    // })
}