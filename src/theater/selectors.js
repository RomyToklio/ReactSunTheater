export function selectTheaterModule(state) {
  return state.theater;
}
export function selectStepSlider(state) {
  return selectTheaterModule(state).step;
}
export function selectTimerFromStepSlider(state) {
  return numberToTimer(selectTheaterModule(state).step);
}

export function numberToTimer(step) {
  let hour = Math.trunc(step/60);
  let minute = Math.trunc(((((step/60) - hour) * 100) * 60) / 100);
  if(hour.lenght === 1){
    hour=0+""+hour;
  } 
  if(minute.lenght === 1){
    minute=0+""+minute;
  } 
  return hour+""+minute;
}
export function selectImages(state) {
  return state.theater.images;
}
export function selectInstruments(state) {
  return state.theater.instruments;
}
export function selectConfiguration(state) {
  return state.theater.configuration;
}
export function selectStepSliderImageCount(state) {
  if(state.theater.configuration.currentInstrument 
    && state.theater.configuration.currentResolution 
    && state.theater.instruments[state.theater.configuration.currentInstrument].images[state.theater.configuration.currentResolution]
    ){
    return state.theater.instruments[state.theater.configuration.currentInstrument].images[state.theater.configuration.currentResolution].length - 1;
  }
  return 0;
}