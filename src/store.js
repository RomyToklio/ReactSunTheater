import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { stepSliderReducer, theaterReducer, instrumentSelectReducer } from './theater/reducers';

const store = createStore(
  combineReducers({
    theater: combineReducers({
      step: stepSliderReducer,
      instruments: theaterReducer,
      configuration: instrumentSelectReducer,
    }),
  }),
  composeWithDevTools(),
);

export {
  store,
}