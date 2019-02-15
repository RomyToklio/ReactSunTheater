import React, { Component } from 'react'

class InstrumentSelect extends Component {

  handleChange = (event) => {
    let resolution = null;
    if(event.currentTarget.ref === 'instrument'){
      resolution = Object.keys(this.props.instruments[this.refs.instrument.value].images)[0];
    }else {
      if(this.refs.resolution === undefined){
        resolution = Object.keys(this.props.instruments[this.refs.instrument.value].images)[0];
      }else {
        resolution = this.refs.resolution.value;
      }
    }
    
    const obj = {
      currentInstrument: this.refs.instrument.value,
      currentResolution: resolution
    }
    this.props.onInstrumentSelectChange(obj);
  };
  render() {
    let resolutionSelect = "";
    if( this.props.configuration.currentInstrument){
      resolutionSelect = (
        <select onChange={this.handleChange} ref="resolution" > 
        {Object.keys(this.props.instruments[this.props.configuration.currentInstrument].images).map((keyName, i) => (
           <option key={i}>{keyName}</option>
        ))}
        </select>
      );
    }

    return (
      <div className="InstrumentSelect">
        
        <select onChange={this.handleChange} ref="instrument"> 
        {Object.keys(this.props.instruments).map((keyName, i) => (
           <option key={i}>{this.props.instruments[keyName].instrument}</option>
        ))}
        </select>
          {resolutionSelect}
        

      </div>
    )
  }
} 

export {
  InstrumentSelect,
}