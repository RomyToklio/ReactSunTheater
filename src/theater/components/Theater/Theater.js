import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { StepSliderContainer } from '../../containers/StepSliderContainer';
import { PictureContainer } from '../../containers/PictureContainer';
import axios from 'axios';
import { numberToTimer } from '../../selectors';
import { isArray } from 'util';
import { InstrumentSelect } from '../InstrumentSelect/InstrumentSelect';
import { instrumentsDefault } from '../../tmp';
import { InstrumentSelectContainer } from '../../containers/InstrumentSelectContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Theater extends Component {
  async componentDidMount() {
    let lists = instrumentsDefault;   
    this.props.onTheaterLoaded(lists);
    /*const target = 'http://127.0.0.1:8080/sdo';
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.get(target,config)
    .then(response => { 
      let lists = response.data;
      this.props.onTheaterLoaded(lists);
    })
    .catch(error => {
      console.log('error');
      console.log(error.response)
    });*/
    
  }
  

  render() { 
    return (
      <div className="Theater"> 
        <Grid container spacing={24}>
          <Grid item xs={6}>
          <InstrumentSelectContainer />
          <StepSliderContainer />
          <PictureContainer />
          
         
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Theater);