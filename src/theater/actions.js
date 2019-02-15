import { STEP_SLIDER_CHANGE, LIBRARY_LOADED, CONFIGURATION_INSTRUMENT_CHANGE } from "./constants";

// Flux Standard Action (FSA)
// 
export function stepSliderChange(payload) {
  return {
    type: STEP_SLIDER_CHANGE,
    payload,
  };
}
export function libraryLoaded(payload) {
  return {
    type: LIBRARY_LOADED,
    payload,
  };
}

export function instrumentSelectChange(payload) {
  return {
    type: CONFIGURATION_INSTRUMENT_CHANGE,
    payload,
  };
}