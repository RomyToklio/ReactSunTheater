import { connect } from 'react-redux';
import { libraryLoaded } from '../actions';
import { selectInstruments } from '../selectors';
import Theater from '../components/Theater/Theater';

function mapStateToProps(state) {
  return {
    instruments: selectInstruments(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTheaterLoaded(library) {
      dispatch(libraryLoaded(library));
    }
  }
}
 
const TheaterContainer = connect(mapStateToProps, mapDispatchToProps)(Theater);

export {
  TheaterContainer,
}