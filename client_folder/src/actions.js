import store from './app/store'

// THESE ARE ALL EXAMPLES!!!!!!!!!!!!!!!!!!!! from https://redux.js.org/basics/actions

// action types
    // export const ADD_TODO = 'ADD_TODO'
    // export const TOGGLE_TODO = 'TOGGLE_TODO'
    // export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const UPDATE_TESTER = 'UPDATE_TESTER'

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

export function updateTester() {
    if (store.getState().counter.value !== 0) {
        console.log("1")
        return { type: UPDATE_TESTER, text: 'test success'}
    } else {
        console.log("2")
        return { type: UPDATE_TESTER, text: 'testeroo'}
    }
}