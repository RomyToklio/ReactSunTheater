import { STEP_SLIDER_CHANGE, LIBRARY_LOADED, CONFIGURATION_INSTRUMENT_CHANGE } from "./constants";

function stepSliderReducer(previousState = 0, action) {
  switch (action.type) {
    case STEP_SLIDER_CHANGE:
      return action.payload;
    default:
      return previousState;
  }
}
function theaterReducer(previousState = {instruments:{}}, action) {
  switch (action.type) {
    case LIBRARY_LOADED:
      return action.payload;
    default:
      return previousState;
  }
}
function instrumentSelectReducer(previousState = {currentInstrument:null,currentResolution:null}, action) {
  switch (action.type) {
    case CONFIGURATION_INSTRUMENT_CHANGE:
      return action.payload;
    default:
      return previousState;
  }
}

/*function todosReducer(previousState = [{id: 1, text: 'Test', completed: false}], action) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...previousState,
        action.payload,
      ];
    case TODO_REMOVE:
      const i = previousState.indexOf(action.payload);
      return [
        ...previousState.slice(0, i),
        ...previousState.slice(i + 1),
      ];
    default:
      return previousState;
  }
}*/

// const nextState = newTodoReducer('', {type: 'TODO_CHANGE', value: 'test'});

export {
  stepSliderReducer,
  theaterReducer,
  instrumentSelectReducer
}