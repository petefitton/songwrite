import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testPTag from '../features/testFeature/test'

export default configureStore({
  reducer: {
    counter: counterReducer,
    testerooni: testPTag,
  },
});
