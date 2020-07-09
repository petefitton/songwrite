import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import testPTag from '../features/testFeature/test'
import userReducer from '../AppRedux'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    // testerooni: testPTag,
    userInfo: userReducer,
  },
});
