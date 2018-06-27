import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
/* eslint-disable no-underscore-dangle */
const configureStore = () => createStore(
  rootReducer, 
  composeEnhancers(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default configureStore;