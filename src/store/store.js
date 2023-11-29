import {
  applyMiddleware,
  combineReducers,
  configureStore,
  legacy_createStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import kishReduser from './reducers/kishReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import kkiReduser from './reducers/kkiReducer';
import lengthOfSpurReducer from './reducers/lengthOfSpurReducer';
import kzshReduser from './reducers/kzshReducer';

const rootReducer = combineReducers({
  kish: kishReduser,
  kki: kkiReduser,
  kzsh: kzshReduser,
  lengthOfSpur: lengthOfSpurReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const store = configureStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default store;
