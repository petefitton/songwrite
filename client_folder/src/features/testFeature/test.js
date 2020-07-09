// // importing the const definition
// import {
//     // ADD_TODO,
//     // TOGGLE_TODO,
//     // SET_VISIBILITY_FILTER,
//     // VisibilityFilters,
//     UPDATE_TESTER
// } from '../../actions'

// // const { SHOW_ALL } = VisibilityFilters

// // defining initial state for use in testPTag function below
// const initialState = {
//     // visibilityFilter: VisibilityFilters.SHOW_ALL,
//     // todos: [],
//     testPTag: "testeroopoopoo"
// }

// // REDUCER testPTag function which handles action UPDATE_TESTER and the export below (testPTag is used in store.js file)
// function testPTag(state = initialState.testPTag, action) {
//     switch (action.type) {
//         case UPDATE_TESTER:
//             console.log("Should hit")
//             console.log(action.text)
//             return action.text
//         default:
//             return state
//     }
// }

// export default testPTag

// // function todos(state = [], action) {
// //     switch (action.type) {
// //         case ADD_TODO:
// //             return [
// //                 ...state,
// //                 {
// //                     text: action.text,
// //                     completed: false
// //                 }
// //             ]
// //         case TOGGLE_TODO:
// //             return state.map((todo, index) => {
// //                 if (index === action.index) {
// //                     return Object.assign({}, todo, {
// //                         completed: !todo.completed
// //                     })
// //                 }
// //                 return todo
// //             })
// //         default:
// //             return state
// //     }
// // }

// // function visibilityFilter(state = SHOW_ALL, action) {
// //     switch (action.type) {
// //         case SET_VISIBILITY_FILTER:
// //             return action.filter
// //         default:
// //             return state
// //     }
// // }
  
// // function todoApp(state = initialState, action) {
// //     return {
// //         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// //         todos: todos(state.todos, action)
// //     }
// // }



// // ALTERNATIVE WAYS TO WRITE todoApp()
// // --------------------------------------------------------------------------------------------


// // import { combineReducers } from 'redux'

// // const todoApp = combineReducers({
// //   visibilityFilter,
// //   todos
// // })

// // export default todoApp


// // --------------------------------------------------------------------------------------------


// // export default function todoApp(state = {}, action) {
// //     return {
// //       visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// //       todos: todos(state.todos, action)
// //     }
// //   }


// // --------------------------------------------------------------------------------------------





// // ALTERNATIVE WAYS TO USE combineReducers()

// // const reducer = combineReducers({
// //     a: doSomethingWithA,
// //     b: processB,
// //     c: c
// // })


// // --------------------------------------------------------------------------------------------

// // function reducer(state = {}, action) {
// //     return {
// //       a: doSomethingWithA(state.a, action),
// //       b: processB(state.b, action),
// //       c: c(state.c, action)
// //     }
// //  }


// // --------------------------------------------------------------------------------------------