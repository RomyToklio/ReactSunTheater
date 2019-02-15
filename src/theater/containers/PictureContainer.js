import { connect } from 'react-redux';
import { selectConfiguration, selectInstruments, selectStepSlider } from '../selectors';
import { Picture } from '../components/Picture/Picture';

function mapStateToProps(state) {
  return {
    configuration: selectConfiguration(state),
    instruments: selectInstruments(state),
    index: selectStepSlider(state),
  };
}

const PictureContainer = connect(mapStateToProps)(Picture);

export {
  PictureContainer,
}