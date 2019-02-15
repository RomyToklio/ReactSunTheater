import { connect } from 'react-redux';
import { InstrumentSelect } from '../components/InstrumentSelect/InstrumentSelect';
import { selectInstruments, selectConfiguration } from '../selectors';
import { instrumentSelectChange } from '../actions';

function mapStateToProps(state) {
  return {
    instruments: selectInstruments(state),
    configuration: selectConfiguration(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInstrumentSelectChange(config) {
      dispatch(instrumentSelectChange(config));
    },
  }
}
 
const InstrumentSelectContainer = connect(mapStateToProps, mapDispatchToProps)(InstrumentSelect);

export {
  InstrumentSelectContainer,
}