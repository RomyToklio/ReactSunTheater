import { connect } from 'react-redux';
import { stepSliderChange } from '../actions';
import { selectStepSlider, selectStepSliderImageCount } from '../selectors';
import { StepSlider } from '../components/StepSlider/StepSlider ';

function mapStateToProps(state) {
  return {
    step: selectStepSlider(state),
    min: 0,
    max: selectStepSliderImageCount(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSliderChange(step) {
      dispatch(stepSliderChange(step));
    }
  }
}
 
const StepSliderContainer = connect(mapStateToProps, mapDispatchToProps)(StepSlider);

export {
  StepSliderContainer,
}